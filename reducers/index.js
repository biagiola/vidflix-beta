import { combineReducers } from 'redux'
import reducerOne from './reducerOne'

export default combineReducers({
  all: reducerOne
});

