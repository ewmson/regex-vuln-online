import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'localhost:4000',
    cache: new InMemoryCache()
});