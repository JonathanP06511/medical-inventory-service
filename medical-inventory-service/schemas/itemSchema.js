const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        id: ID!
        name: String!
        quantity: Int!
        description: String
    }

    input ItemInput {
        name: String!
        quantity: Int!
        description: String
    }

    type Query {
        getAllItems: [Item]
        getItemById(id: ID!): Item
    }

    type Mutation {
        createItem(data: ItemInput!): Item
        updateItem(id: ID!, data: ItemInput!): Item
        deleteItem(id: ID!): Boolean
    }
`;

module.exports = typeDefs;
