import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../static/styles.css'

class AdminShop extends Component {
	constructor() {
		super();
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/adminShop', {credentials: 'include'})
			.then((res) => { 
				if (res.status === 200) {
					return res.json();
				} else {
					return this.props.history.push('/')
				} 
			})
			.then(products => this.setState({ products }))
	}

	render() {
		return (
			<div className="top-wrapper">
				<div>
					<h1 className="title">Admin Shop</h1>
				</div>
				<div class="nav">
			        <li><Link to={'./adminLogin'}><button variant="raised">AdminLogin</button></Link></li>
			        <li><Link to={'./shop'}><button variant="raised">Shop</button></Link></li>
			        <li><Link to={'./adminLogout'}><button variant="raised">AdminLogout</button></Link></li>
		        	<li><Link to={'./adminCreateProduct'}><button variant="raised">Create Product</button></Link></li>
		        </div>
				<div class="list-items">
					{this.state.products.map(product =>
						<Link to={`./product/${product.id}`}>
							<li key={product.id}>{ product.name } { product.price }</li>
						</Link>
					)}
				</div>
			</div>
		);
	}
}

export default AdminShop;