import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import AdminLogin from './pages/AdminLogin.js';
import AdminLogout from './pages/AdminLogout.js';
import AdminShop from './pages/AdminShop.js';
import CreateProduct from './pages/CreateProduct.js';
import Product from './pages/Product.js';

class App extends Component {
	render() {
		const App = () => (
			<div>
				<Switch>
					<Route exact path="/" component={Home}/>

					<Route path="/adminLogin" component={AdminLogin}/>
					<Route path="/adminLogout" component={AdminLogout}/>
					
					<Route path="/adminShop" component={AdminShop}/>
					<Route path="/createProduct" component={CreateProduct}/>
					<Route path="/product/:id" component={Product}/>
				</Switch>
			</div>
		)
		return ( <Switch><App /></Switch>)
	}
}

export default App;