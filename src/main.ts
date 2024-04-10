import { ApolloServer } from 'apollo-server';
import * as dotenv from 'dotenv';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

dotenv.config();


server
  .listen(process.env.PORT, "web-production-d253.up.railway.app")
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });