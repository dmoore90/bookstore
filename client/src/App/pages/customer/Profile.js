import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../static/styles.css';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// data: {
			// 	products: [],
			// 	username: []
			// }
			products: [],
			username: []
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
			.then(data => {
				this.setState({products: data.products, username: data.username})
			})
	}

	render() {
		return (
			<div className="container">
				<div className="top-wrapper">
					<div>
						<h1 className="title">Shop</h1>
					</div>
					<div>
						<h2>{ this.state.username }</h2>
					</div>
					<div className="nav">
				        <li><Link to={'./logout'}><button variant="raised">logout</button></Link></li>
			        </div>
					<div className="list-items">
						{this.state.products.map(product =>
							<Link to={`./product/${product.id}`}>
								<li key={product.id}>{ product.name } { product.price }</li>
							</Link>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;