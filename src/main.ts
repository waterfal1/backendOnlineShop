import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import express from "express";

dotenv.config();

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    persistedQueries: false,
  });

  await server.start();

  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;
  await new Promise((resolve) => app.listen({ port }));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer();

export default app;
