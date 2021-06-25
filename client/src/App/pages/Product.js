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
		fetch(`http://localhost:3000/product/${id}`, {credentials: 'include'})
			.then(res => res.json())
			.then(product => { this.setState(product) })
	}

	handleChange(event) {
		const { value, name } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch(`http://localhost:3000/product`, {
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
				return this.props.history.push('/adminShop')
			} else {
				return this.props.history.push('/adminShop')
			}
		})
		.catch(err => console.log(err));
	}

	handleDelete(event) {
		event.preventDefault();
		fetch(`http://localhost:3000/deleteProduct`, {
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
				return this.props.history.push('/adminShop')
			} else {
				const error = new Error(res.error);
				throw error;
			}
		})
		.catch(err => console.log(err));
	}

	render(props) {
		return (
			<div className="top-wrapper">
				<div>
					<h1 class="title">Update Product</h1>
				</div>
				<div class="list-container">
			      <form onSubmit={this.handleSubmit}>
			      	<li><input type="hidden" name="id" value={this.state.id} onChange={this.handleChange} /></li>
			    	<label>name:</label> 
			    	<li><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></li>
			    	<label>price:</label> 
			    	<li><input type="text" name="price" value={this.state.price} onChange={this.handleChange} /></li>
			        <input type="submit" value="Submit" />
			      </form>
				</div>
				<div>
					<h1 class="title">Delete Product</h1>
				</div>
				<div>
			      <form onSubmit={this.handleDelete}>
			      	<input type="hidden" name="id" value={this.state.id} onChange={this.handleChange} />
			        <input type="submit" value="delete" />
			      </form>
				</div>
			</div>
		);
	}
}

export default UpdateProduct;