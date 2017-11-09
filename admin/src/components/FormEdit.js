import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataAPI, updateDataAPI } from '../actions/NewsAction'
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  Redirect
} from 'react-router-dom'


class FormEdit extends Component {
  constructor() {
    super()
    this.state = {
          _id: '',
          linksite: '',
          title: '',
          addressDetected: '',
          lat: '',
          lng: '',
          valid: false,
          fireRedirect: false
    }
    this.handleFAddressChange = this.handleFAddressChange.bind(this)
    this.handleFLatitudeChange = this.handleFLatitudeChange.bind(this)
    this.handleFLongitudeChange = this.handleFLongitudeChange.bind(this)
    this.handleFValidChange = this.handleFValidChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if( this.props.dataEdit.length > 0) {
      this.setState({
        _id: this.props.dataEdit[0]._id,
        linksite: this.props.dataEdit[0].linksite,
        title: this.props.dataEdit[0].title,
        addressDetected: this.props.dataEdit[0].addressDetected,
        lat: this.props.dataEdit[0].lat,
        lng: this.props.dataEdit[0].lng,
        valid: false
      })
    }
  }

  handleFAddressChange(e) {
    this.setState({
      addressDetected: e.target.value
    })
  }

  handleFLatitudeChange(e) {
    this.setState({
      lat: Number(e.target.value)
    })
  }

  handleFLongitudeChange(e) {
    this.setState({
      lng: Number(e.target.value)
    })
  }

  handleFValidChange(e) {
    this.setState({
      valid: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state._id !== '') {
      var dataUpdate = {
        addressDetected: this.state.addressDetected,
        lat: this.state.lat,
        lng: this.state.lng,
        valid: this.state.valid
      }
      this.props.updateDataAPI(dataUpdate, this.state._id)
      alert('validate data success')
      this.setState({
        _id: '',
        linksite: '',
        title: '',
        addressDetected: '',
        lat: '',
        lng: '',
        valid: false
      })
    } else {
      alert('cannot send empty data')
    }
    this.setState({ fireRedirect: true })
  }
  render() {
    const { fireRedirect } = this.state
    return (
      <div className="container">
        <h3 style={{textAlign: 'center'}}>News Review and Validation</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label >Title</label>
              <input readonly="" type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.title} />
            </div> 
            <div className="form-group">
              <label >Linksite</label>
              <input readonly="" type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.linksite} />
            </div> 
            <div className="form-group">
              <label >Address Detected</label>
              <input onChange={this.handleFAddressChange} type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.addressDetected} />
            </div> 
            <div className="form-group">
              <label >Latitude</label>
              <input onChange={this.handleFLatitudeChange}  type="number" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.lat} />
            </div> 
            <div className="form-group">
              <label >Longitude</label>
              <input onChange={this.handleFLongitudeChange} type="number" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.lng} />
            </div> 
            <div className="form-group">
              <label for="exampleSelect1">Validation</label>
              <select onChange={this.handleFValidChange}  className="form-control" id="exampleSelect1">
                <option value="false">Not Valid</option>
                <option value="true">Valid</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Validate</button>
          </form>
          {fireRedirect && (<Redirect to={'/'}/>)}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    dataEdit: state.NewsReducer.dataEdit
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDataAPI: () => dispatch(getDataAPI()),
    updateDataAPI: (newData, _id) => dispatch(updateDataAPI(newData, _id))
  }
}

const FormEditCon = connect(mapState, mapDispatch)(FormEdit)

export default FormEditCon



