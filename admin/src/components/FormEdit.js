import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataAPI } from '../actions/NewsAction'

class FormEdit extends Component {
  constructor() {
    super()
    this.state = {
      dataEdit: [
        {
          linksite: '',
          title: '',
          addressDetected: '',
          lat: '',
          lng: '',
          valid: null
        }
      ]
    }
  }

  componentWillMount() {
    if( this.props.dataEdit.length > 0) {
      this.setState({
        dataEdit: this.props.dataEdit
      })
    }
  }



  render() {
    return (
      <div>
        <h3>News Review and Validation</h3>
        <p>{JSON.stringify(this.props.dataEdit)}</p>
          <form>
            <div class="form-group">
              <label >Title</label>
              <input readonly="" type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.dataEdit[0].title} />
            </div> 
            <div class="form-group">
              <label >Linksite</label>
              <input readonly="" type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.dataEdit[0].linksite} />
            </div> 
            <div class="form-group">
              <label >Address Detected</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.dataEdit[0].addressDetected} />
            </div> 
            <div class="form-group">
              <label >Latitude</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.dataEdit[0].lat} />
            </div> 
            <div class="form-group">
              <label >Longitude</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="" value={this.state.dataEdit[0].lng} />
            </div> 
            <div class="form-group">
              <label for="exampleSelect1">Example select</label>
              <select class="form-control" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
  
          </form>
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
    getDataAPI: () => dispatch(getDataAPI())
  }
}

const FormEditCon = connect(mapState, mapDispatch)(FormEdit)

export default FormEditCon



