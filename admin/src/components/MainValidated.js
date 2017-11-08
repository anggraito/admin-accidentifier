import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataAPI } from '../actions/NewsAction'
import TableValidated from './TableValidated'

class Mainvalidated extends Component {
  // componentWillMount() {

  // }
  render() {
    return (
      <div>
        <h3>VALIDATED NEWS </h3>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>News Title</th>
              <th>Linksite</th>
              <th>Validation</th>
              <th>Edit</th>
            </tr>
          </thead>
          <TableValidated />
        </table>
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
