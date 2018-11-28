import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppFrame from '../components/AppFrame/AppFrame';
import Home from '../pages/Home/Home';

const AppRouter = (
	<Router>
		<AppFrame>
			<Route exact path="/" component={Home} />
		</AppFrame>
	</Router>
);

export default AppRouter;
