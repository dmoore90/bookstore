import React, { Component } from 'react';

class CreateProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: ''
		};
   		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { value, name } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:3000/createProduct', {
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

	render() {
		return (
			<div className="top-wrapper">
				<div>
					<h1 class="title">Create Product</h1>	
				</div>
				<div class="list-container">
			      <form onSubmit={this.handleSubmit}>
			    	<label>name:</label>
			    	<li><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></li>
			    	<label>price:</label> 
			    	<li><input type="text" name="price" value={this.state.price} onChange={this.handleChange} /></li>
			        <input type="submit" value="Submit" />
			      </form>
				</div>
			</div>
		);
	}
}

export default CreateProduct;