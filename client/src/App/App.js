import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import AdminLogin from './pages/admin/Login.js';
import AdminLogout from './pages/admin/Logout.js';
import AdminShop from './pages/admin/Shop.js';
import CreateProduct from './pages/admin/CreateProduct.js';
import Product from './pages/admin/Product.js';
import Shop from './pages/Shop.js';
import Register from './pages/customer/Register.js';
import Profile from './pages/customer/Profile.js';
import Login from './pages/customer/Login.js';
import Logout from './pages/customer/Logout.js';
import ProductDetail from './pages/ProductDetail.js';

class App extends Component {
	render() {
		const App = () => (
			<div>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/product/:id" component={ProductDetail}/>

					<Route path="/admin/Login" component={AdminLogin}/>
					<Route path="/admin/logout" component={AdminLogout}/>
					
					<Route path="/admin/shop" component={AdminShop}/>
					<Route path="/admin/createProduct" component={CreateProduct}/>
					<Route path="/admin/product/:id" component={Product}/>

					<Route path="/customer/shop" component={Shop}/>

					<Route path="/customer/register" component={Register}/>
					<Route path="/customer/login" component={Login}/>
					<Route path="/customer/profile" component={Profile}/>
					<Route path="/customer/logout" component={Logout}/>
				</Switch>
			</div>
		)
		return ( <Switch><App /></Switch>)
	}
}

export default App;