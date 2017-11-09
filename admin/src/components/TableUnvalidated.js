import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDataAPI, selectToEdit } from '../actions/NewsAction'
import {
  Link
} from 'react-router-dom'

class TableUnvalidated extends Component {

  componentWillMount() {
    this.props.getDataAPI()
  }

  editing(news) {
    var data = []
    data.push(news)
    this.props.selectToEdit(data)
  }
  render() {
    return (
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr style={{textAlign: 'center'}}>
            <th>No</th>
            <th>News Title</th>
            <th>Linksite</th>
            <th>Adress Detected</th>
            <th>Validation</th>
            <th>Edit</th>
          </tr>
        </thead>
        {this.props.dataNews.unvalidated.map((news, index) => {
          return (
            <tr key={news.id}>
              <td>{index + 1} </td>
              <td>{news.title}</td>
              <td><a href={news.linksite} >{news.linksite} </a></td>
              <td>{news.addressDetected}</td>
              <td>{news.valid}</td>
              <td><Link to="/edit" onClick={() => { this.editing(news) }} href="#" className="btn btn-primary">Edit</Link></td>
            </tr>
          )
        })}
      </table>
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
    getDataAPI: () => dispatch(getDataAPI()),
    selectToEdit: (data) => dispatch(selectToEdit(data))
  }
}

const TableUnvalidatedComp = connect(mapState, mapDispatch)(TableUnvalidated)

export default TableUnvalidatedComp