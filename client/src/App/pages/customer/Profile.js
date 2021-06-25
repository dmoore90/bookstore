import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../static/styles.css'

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/customer/profile', {credentials: 'include'})
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
					<h1 className="title">Shop</h1>
				</div>
				<div>
					<h2>user</h2>
				</div>
				<div class="nav">
			        <li><Link to={'./logout'}><button variant="raised">logout</button></Link></li>
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

export default Profile;