import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/styles.css';

class ProductDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: []
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`http://localhost:3000/product/${id}`)
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					return this.props.history.push('/')
				} 
			})
			.then(data => {
				this.setState({ 
					product: data.product
				})
			})
	}

	render() {
		return (
			<div className="container">
				<div className="top-wrapper">
					<div>
						<h1 className="title">Product</h1>
					</div>
					<div className="nav">
				        <li><Link to={'/'}><button variant="raised">home</button></Link></li>
			        </div>
					<div className="list-items">
						<p>{ this.state.product.name }</p>
					</div>
					<div>
						<Link to={'#'}><button>buy</button></Link>
						<Link to={'#'}><button>add to cart</button></Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDetail;