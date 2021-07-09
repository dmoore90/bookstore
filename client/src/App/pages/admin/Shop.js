import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../public/css/styles.css'
import id1 from '../../../public/images/inventory/1234.png';

class AdminShop extends Component {
	constructor() {
		super();
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/admin/adminShop', {credentials: 'include'})
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
			<div className="container">
				<div className="top-wrapper">
					<div>
						<h1 className="title">Admin Shop</h1>
					</div>
					<div className="nav">
				        <li><Link to={'./logout'}><button variant="raised">logout</button></Link></li>
			        	<li><Link to={'./createProduct'}><button variant="raised">Create Product</button></Link></li>
			        </div>
					<div className="list-items">
						{this.state.products.map(product =>
							<Link to={`./product/${product.id}`}>
								<img src={id1} alt="Id1" />
								<li key={product.id}>{ product.name } { product.price }</li>
							</Link>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default AdminShop;