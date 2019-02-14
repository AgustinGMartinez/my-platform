import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/home';
import Login from '../../pages/Login/Login';

const routes = () => {
	return (
		<Switch>
			<Route path="/ingresar" component={Login} />
			<Route path="/carrito" component={() => <h1>carrito</h1>} />
			<Route path="/" exact component={Home} />
			<Route render={() => <h1>404 not found</h1>} />
		</Switch>
	);
};

export default routes;
