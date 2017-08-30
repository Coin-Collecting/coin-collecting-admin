import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Base from './base';
import HomePage from './pages/homepage';
import Issues from './pages/issues';
import Coins from './pages/coins';
import Varieties from './pages/varieties';
import Compositions from './pages/compositions';
import Login from './pages/login';

export const routes = (
	<Router>
		<Route>
			<Switch>
				<Base>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/issues" component={Issues}/>
					<Route exact path="/coins" component={Coins}/>
					<Route exact path="/varieties" component={Varieties}/>
					<Route exact path="/compositions" component={Compositions}/>
					<Route exact path="/login" component={Login}/>
				</Base>
			</Switch>
		</Route>
	</Router>
);
