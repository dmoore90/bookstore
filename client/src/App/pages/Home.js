import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../static/styles.css'

class Home extends Component {

  render() {
    return (
      <div>
        <div class="top-wrapper">
          <div>
            <h1 class="title">Home</h1>
          </div>
        </div>
        <div class="nav">
            <li><Link to={'./adminLogin'}><button>Admin Login</button></Link></li>
            <li><Link to={'./signup'}><button>Sign Up</button></Link></li>
            <li><Link to={'./userLogin'}><button>User Login</button></Link></li>
            <li><Link to={'./shop'}><button>Shop</button></Link></li>
        </div>
      </div>      
    );
  }
}

export default Home;