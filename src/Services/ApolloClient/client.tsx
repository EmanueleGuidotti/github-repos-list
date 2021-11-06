import {ApolloClient, ApolloLink, InMemoryCache, HttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, {headers}) => {
    const token = process.env.REACT_APP_API_KEY;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(ApolloLink.from([httpLink])),
});
