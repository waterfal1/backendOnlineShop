import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import express from "express";

const app = express();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

dotenv.config();

server.applyMiddleware({ app });

app.listen(process.env.PORT, () => {
  console.log(`🚀  Server ready at `);
});
