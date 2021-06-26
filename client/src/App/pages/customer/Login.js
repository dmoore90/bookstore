import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../../static/styles.css'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleChange(event) {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:3000/customer/login', {
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
				return this.props.history.push('/customer/profile');
			} else {
				return this.props.history.push('/');
			}
		})
		.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="container">
			  <div className="top-wrapper">
			    <div>
			      <h1 className="title">Customer Login</h1>
			    </div>
			    <div className="list-container">
					<form onSubmit={this.handleSubmit}>
				        <div><label>username: <input type="text" name="username" value={this.state.email} onChange={this.handleChange} /></label></div>
				        <div><label>password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></label></div>
						<input type="submit" value="Submit" />
					</form>        
			    </div>
			  </div>
		  	</div>      
		);
	}
}

export default Login;