import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppFrame from '../components/AppFrame/AppFrame';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Errors/404';

const AppRouter = (
	<Router>
		<AppFrame>
			<Route exact path="/" component={Home} />
			<Route component={Error404} />
		</AppFrame>
	</Router>
);

export default AppRouter;
