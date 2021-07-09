import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/styles.css'

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="top-wrapper">
          <div>
            <h1 className="title">Home</h1>
          </div>
        </div>
        <div className="nav">
            <li><Link to={'./admin/login'}><button>Admin Login</button></Link></li>
            <li><Link to={'./customer/register'}><button>Register</button></Link></li>
            <li><Link to={'./customer/login'}><button>Login</button></Link></li>
            <li><Link to={'./shop'}><button>Shop</button></Link></li>
        </div>
      </div>      
    );
  }
}

export default Home;