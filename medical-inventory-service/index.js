require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/itemSchema');
const resolvers = require('./resolvers/itemResolver');
const sequelize = require('./config/database');
const setupSwagger = require('./swagger/swagger');

const startServer = async () => {
    const app = express();

    setupSwagger(app);

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    try {
        await sequelize.sync();
        console.log('Database connected!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }

    app.listen({ port: process.env.PORT }, () => 
        console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
    );
};

startServer();
