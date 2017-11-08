import axios from 'axios'

export const getDataAPI = () => {
  return (dispatch, getState) => {
    const url = 'http://35.196.134.74/api/accident/'
    axios.get(url).then(({ data }) => {
      dispatch(getData(data))
    })
  }
}

export const getData = (data) => {
  return {
    type: 'SET_DATA_NEWS',
    payload: { data }
  }
}

export const selectToEdit = (data) => {
  return {
    type: 'SELECT_TO_EDIT',
    payload: { data }
  }
}

export const updateDataAPI = (new_data, _id) => {
  return (dispatch, getState) => {
    const url = `http://35.196.134.74/api/accident/${_id}`
    axios.patch(url, new_data).then(({ data }) => {
      dispatch(updateDataStore(data))
    })
  }
}

export const updateDataStore = (data) => {
  return {
    type: 'UPDATE_DATA',
    payload: { data }
  }
}

// export const destroyDataToEdit = () => {
//   return {
//     type: 'DESTROY_DATA_TO_EDIT'
//   }
// }

// export const destroySearchResult = () => {
//   return {
//     type: 'DESTROY_SEARCH_RESULT'
//   }
// }