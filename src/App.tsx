import { ApolloProvider } from "@apollo/client";
import ListPage from "./Pages/ListPage";
import { client } from "./Services/ApolloClient/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <ListPage></ListPage>
    </ApolloProvider>
  );
}

export default App;
