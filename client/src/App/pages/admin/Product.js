import React, { Component } from 'react';

class UpdateProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: ''
		};

    	this.componentDidMount = this.componentDidMount.bind(this);
   		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`http://localhost:3000/admin/product/${id}`, {credentials: 'include'})
			.then(res => res.json())
			.then(product => { this.setState(product) })
	}

	handleChange(event) {
		const { value, name } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch(`http://localhost:3000/admin/product`, {
			method: 'POST',
			withCredentials: true,
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (res.status === 200) {
				return this.props.history.push('/admin/shop')
			} else {
				return this.props.history.push('/admin/shop')
			}
		})
		.catch(err => console.log(err));
	}

	handleDelete(event) {
		event.preventDefault();
		fetch(`http://localhost:3000/admin/deleteProduct`, {
			method: 'POST',
			withCredentials: true,
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (res.status === 200) {
				return this.props.history.push('/admin/shop')
			} else {
				const error = new Error(res.error);
				throw error;
			}
		})
		.catch(err => console.log(err));
	}

	render(props) {
		return (
			<div className="container">
				<div className="top-wrapper">
					<div>
						<h1 className="title">Update Product</h1>
					</div>
					<div className="list-container">
				      <form onSubmit={this.handleSubmit}>
				      	<li><input type="hidden" name="id" value={this.state.id} onChange={this.handleChange} /></li>
				    	<label>name:</label> 
				    	<li><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></li>
				    	<label>price:</label> 
				    	<li><input type="text" name="price" value={this.state.price} onChange={this.handleChange} /></li>
				        <input type="submit" value="update" />
				      </form>
					</div>
					<div>
						<h1 className="title">Delete Product</h1>
					</div>
					<div>
				      <form onSubmit={this.handleDelete}>
				      	<input type="hidden" name="id" value={this.state.id} onChange={this.handleChange} />
				        <input type="submit" value="delete" />
				      </form>
					</div>
				</div>
			</div>
		);
	}
}

export default UpdateProduct;