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

const networkInterface = createNetworkInterface({
  uri: process.env.API_URL,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = store.getState().reducers.token;
    req.options.headers.authorization = token ? token : null;
    next();
  }
}]);

const client = new ApolloClient({
	networkInterface,
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
