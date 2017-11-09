import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataAPI } from '../actions/NewsAction'
import TableUnvalidated from './TableUnvalidated'

class MainUnvalidated extends Component {
  componentWillMount() {
    this.props.getDataAPI()
  }
  render() {
    return (
      <div className="container">
        <h3 style={{textAlign: 'center'}}>UNVALIDATED NEWS</h3>
        <TableUnvalidated />
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

const MainUnvalidatedCon = connect(mapState, mapDispatch)(MainUnvalidated)

export default MainUnvalidatedCon

// export default MainUnvalidated


