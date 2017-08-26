import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Base from './base';
import DefaultLayout from './layouts/default';
import HomePage from './pages/homepage';
import Issues from './pages/issues';
import Coins from './pages/coins';
import Varieties from './pages/varieties';

export const routes = (
	<Router>
		<Route>
			<Switch>
				<Base>
					<DefaultLayout>
						<Route exact path="/" component={HomePage}/>
						<Route exact path="/issues" component={Issues}/>
						<Route exact path="/coins" component={Coins}/>
						<Route exact path="/varieties" component={Varieties}/>
					</DefaultLayout>
				</Base>
			</Switch>
		</Route>
	</Router>
);
