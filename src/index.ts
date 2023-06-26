import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";

const app = express();
async function startServer() {
    const server = new ApolloServer({
        schema
    });
    await server.start();
    server.applyMiddleware({ app, path:'/api' });
}
startServer();

app.listen(4000, () => {
    console.log('server is running at 4000')
})