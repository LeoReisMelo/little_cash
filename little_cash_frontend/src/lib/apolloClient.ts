import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // URL do seu backend GraphQL
  cache: new InMemoryCache(),
});

export default client;