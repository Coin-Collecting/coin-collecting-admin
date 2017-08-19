import React from 'react';

import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'http://localhost:5000/graphql',
	}),
});

import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import HomePage from './pages/homepage';

export default class App extends React.Component {
  render() {
    return (
    	<ApolloProvider client={client}>
				<Router>
					<Route exact path="/" component={HomePage}/>
				</Router>
			</ApolloProvider>
    )
  }
}
