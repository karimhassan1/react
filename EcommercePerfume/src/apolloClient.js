// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import {setContext} from "@apollo/client/link/context"

const client = new HttpLink({
    uri:'http://localhost:8000/graphql'
});

const authLink = setContext

export default client;
