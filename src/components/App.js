import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Booklist from './Booklist'

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });
function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Booklist></Booklist>
      </ApolloProvider>
    </div>
  );
}

export default App;
