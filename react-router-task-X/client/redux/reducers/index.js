import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import catalog from "./catalog"

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
      catalog
  })

export default createRootReducer
