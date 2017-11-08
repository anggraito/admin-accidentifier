import React, { Component } from 'react';
// import Navbar from './Navbar'
import { connect } from 'react-redux'
import { getDataAPI } from '../actions/NewsAction'
import MainUnvalidated from './MainUnvalidated'
import MainValidated from './MainValidated'
import {
  // BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Main extends Component {
  componentWillMount() {
    this.props.getDataAPI()
  }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <MainUnvalidated /> */}
        <Link to="/"  > Unvalidated News</Link> 
        <Link to="/validated-news"  > Validated News</Link> 
        <Route  exact path="/" component={MainUnvalidated} />
        <Route  path="/validated-news" component={MainValidated} />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    dataNews: state.NewsReducer.dataNews
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDataAPI: () => dispatch(getDataAPI())
  }
}

const MainCon = connect(mapState, mapDispatch)(Main)

export default MainCon


// export default Main
