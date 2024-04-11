import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import express from "express";

dotenv.config();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;
  await new Promise((resolve) => app.listen({ port }));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer();
