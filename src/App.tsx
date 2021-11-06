import React from 'react';
import {ApolloProvider} from "@apollo/client";
import ListPage from "./Pages/ListPage";

function App() {
    return (
        <ApolloProvider client={client}>
            <ListPage></ListPage>
        </ApolloProvider>
    );
}

export default App;
