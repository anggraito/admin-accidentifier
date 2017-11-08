const initState = {
  dataNews: {
    unvalidated: [{ "_id": "5a01b4362d3ecc49b4814df3", "updatedAt": "2017-11-07T13:25:10.507Z", "createdAt": "2017-11-07T13:25:10.507Z", "linksite": "http://www.tribunnews.com/regional/2017/11/06/bus-terguling-sang-sopir-dekap-anaknya", "title": "Bus Terguling, Sang Sopir Dekap Anaknya", "imgUrl": "http://cdn2.tstatic.net/tribunnews/foto/bank/images/sopir-bus-nahas-suswanto-tergolek-lemas-di-ruang-instalasi-gawat-darurat-r_20171106_095259.jpg", "addressDetected": "Bandar Lampung", "lat": -5.3971396, "lng": 105.2667887, "street": null, "village": null, "district": null, "date": "2017-05-09T14:38:00.000Z", "__v": 0, "valid": null }] ,
    validated: []
  },
  dataEdit: []
}

function NewsReducer(state = initState, action) {
  switch (action.type) {
    case 'SET_DATA_NEWS':
      var unvalidatedNews = action.payload.data.filter(news => news.valid === null)
      var validatedNews = action.payload.data.filter(news => news.valid !== null)
      var _dataNews = {
        unvalidated: unvalidatedNews,
        validated: validatedNews
      }
      return { ...state, dataNews: _dataNews }
    case 'SELECT_TO_EDIT':
      
      return { ...state, dataEdit: action.payload.data }
    default:
      return state
  }
}

export default NewsReducer