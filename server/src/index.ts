import { ApolloServer, gql } from 'apollo-server';
import { context } from './PrismaContext'
import {schema} from "./schema";

const server = new ApolloServer({
    schema: schema,
    context:context
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});