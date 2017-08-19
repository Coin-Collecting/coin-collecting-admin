import React from 'react';
import { routes } from './routes';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import './default-styles.scss';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'http://localhost:5000/graphql',
	}),
});

export default class App extends React.Component {
  render() {
    return (
    	<ApolloProvider client={client}>
				{ routes }
			</ApolloProvider>
    )
  }
}
