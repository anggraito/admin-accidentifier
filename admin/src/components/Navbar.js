import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse show" id="navbarColor01">
          <ul className="navbar-nav" >
          <li className="nav-item active" >
          <a class="nav-link" href="">Admin</a>
        </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/"  > Unvalidated News</Link> 
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/validated-news"  > Validated News</Link>
            </li> 
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
