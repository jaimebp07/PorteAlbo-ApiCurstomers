const express = require('express');
const { readFileSync } = require('fs');
const { ApolloServer } = require('apollo-server-express');

// const typeDefs = readFileSync('./graphql/schema.graphql', 'utf8');

const { typeDefs } = require('./graphql/typeDef')
const { resolvers } = require('./graphql/resolvers');


const app = express();

async function start(){
    const apolloServer = new ApolloServer({ typeDefs, resolvers });

    await apolloServer.start();
    // apolloServer.applyMiddleware({ app, path: "/api" });
    apolloServer.applyMiddleware({ app });

    // app.use((req, res, next) => {
    //     res.status(404).send("not found");
    // });

    app.listen( 3000, () =>
      console.log("Server on port",  3000)
    );
}

start();