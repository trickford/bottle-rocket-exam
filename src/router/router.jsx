import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import AppFrame from '../components/AppFrame/AppFrame';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Errors/404';

const AppRouter = (
	<Provider store={store}>
		<Router>
			<AppFrame>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={Error404} />
				</Switch>
			</AppFrame>
		</Router>
	</Provider>
);

export default AppRouter;
