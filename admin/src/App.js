import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar'
// import Main from './components/Main'
import MainUnvalidated from './components/MainUnvalidated'
import MainValidated from './components/MainValidated'
import FormEdit from './components/FormEdit'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Router>
            <div className="container">
          {/* <Main /> */}
          <Link to="/"  > Unvalidated News</Link>
          <Link to="/validated-news"  > Validated News</Link>
          <Route exact path="/" component={MainUnvalidated} />
          <Route path="/validated-news" component={MainValidated} />
          <Route path="/edit" component={FormEdit} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
