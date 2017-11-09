import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataAPI } from '../actions/NewsAction'
import TableValidated from './TableValidated'

class Mainvalidated extends Component {
  // componentWillMount() {

  // }
  render() {
    return (
      <div className="container"> 
        <h3 style={{textAlign: 'center'}}>VALIDATED NEWS </h3>
        <TableValidated />
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

const MainValidatedCon = connect(mapState, mapDispatch)(Mainvalidated)

export default MainValidatedCon

// export default Mainvalidated
