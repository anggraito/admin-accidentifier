import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataAPI } from '../actions/NewsAction'
import TableUnvalidated from './TableUnvalidated'

class MainUnvalidated extends Component {
  // componentWillMount () {

  // }
  render() {
    return (
      <div>
        <h3>UNVALIDATED NEWS</h3>
        <p>{JSON.stringify(this.props.dataNews.unvalidated) } </p>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>News Title</th>
              <th>Linksite</th>
              <th>Adress Detected</th>
              <th>Validation</th>
              <th>Edit</th>
            </tr>
          </thead>
          <TableUnvalidated />
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

const MainUnvalidatedCon = connect(mapState, mapDispatch)(MainUnvalidated)

export default MainUnvalidatedCon

// export default MainUnvalidated


