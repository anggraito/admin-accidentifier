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
            <a className="navbar-brand" href="#">Accidentifier Admin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
                 {/* <li class="nav-item active">
                  <a class="nav-link" href="#">Unvalidated News <span class="sr-only">(current)</span></a>
                </li> */}
                 <li className="nav-item">
                  <Link className="nav-link" to="/"  > Unvalidated News</Link> 
                {/* <a className="nav-link" href="#">Unvalidated News</a> */}
                 </li> 
                 <li className="nav-item">
                <Link className="nav-link" to="/validated-news"  > Validated News</Link>
                 {/* <a className="nav-link" href="#">Validated News</a> */}
                </li> 
              </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar
