import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})
const linksRawQuery = gql`
{
  linksFeed {
    id
    description
    url
  }
}
`
console.log(linksRawQuery)

client.query({
  query: gql`
    {
      linksFeed{
        id
        description
        url
      }
    }
  `
})
  .then(results => console.log(results))

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
