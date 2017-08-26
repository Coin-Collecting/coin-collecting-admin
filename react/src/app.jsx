import React from 'react';
import { routes } from './routes';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { createStore, combineReducers } from 'redux';
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive'
import { Provider } from 'react-redux'
import reducers  from './reducers';

export const store = createStore(
	combineReducers({
		browser: responsiveStateReducer,
		reducers,
	}),
	responsiveStoreEnhancer
);

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: process.env.API_URL,
	}),
});

export default class App extends React.Component {
  render() {
		return (
			<Provider store={store}>
				<ApolloProvider client={client}>
					{ routes }
				</ApolloProvider>
			</Provider>
    )
  }
}
