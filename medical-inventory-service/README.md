# Information API

This project is an Information API built with Node.js, Express, and GraphQL. It uses Sequelize for database connection and Swagger for API documentation. The API runs on an Express server and allows managing information using Apollo Server for GraphQL.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Framework for Node.js that facilitates web application development.
- **Apollo Server**: GraphQL server for Node.js.
- **Sequelize**: ORM for Node.js that simplifies database interactions.
- **Swagger**: Tool for documenting and testing REST APIs.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone <https://github.com/JonathanP06511/medical-inventory-service.git>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The API will be available at `http://localhost:4000`.

3. The API documentation can be accessed at `http://localhost:4000/api-docs`.

## Project Structure

- `index.js`: Main file where the Express and Apollo Server are configured and started.
- `schemas/itemSchema.js`: File that defines the GraphQL schema.
- `resolvers/itemResolver.js`: File that defines the resolvers for the GraphQL schema.
- `config/database.js`: Sequelize configuration for database connection.
- `swagger/swagger.js`: Configuration for Swagger to generate API documentation.

## Routes

- **GraphQL Endpoint**: `POST /graphql` - This is the main endpoint for making queries and mutations in GraphQL.

## Docker

To run this project in a Docker container:

1. Build the Docker image:
    ```bash
    docker build -t medical-inventory .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 4000:4000 medical-inventory
    ```

3. The API will be available at `http://localhost:4000` inside the Docker container.

## Documentation with Swagger

API documentation is generated with Swagger and served at the `/api-docs` endpoint. Swagger allows you to view and test the API endpoints interactively.
