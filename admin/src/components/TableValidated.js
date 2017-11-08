import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDataAPI } from '../actions/NewsAction'
// import {
//   Link
// } from 'react-router-dom'



class TableValidated extends Component {

  componentWillMount() {
    this.props.getDataAPI()
  }
  render() {
    return (
      <tbody>
        {this.props.dataNews.validated.map((news, index) => {
          return (
            <tr className="warning" key={news.id}>
              <td>{index+1} </td>
              <td>{news.title}</td>
              <td><a href={news.linksite} >{news.linksite} </a></td>
              <td>{news.valid}</td>
              <td></td>
            </tr>
          )
        })}
      </tbody>
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

const TableValidatedComp = connect(mapState, mapDispatch)(TableValidated)

export default TableValidatedComp