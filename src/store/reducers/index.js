import { combineReducers } from 'redux';
import types from '../types'

const initialState = {
  loading: false,
  error: false,
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_LOADING: 
      return {
        ...state,
        loading: action.payload
      }
    case types.SET_ERROR:
      return {
        ...state,
        loading: action.payload
      }
    default: 
      return state
  }
}

export default combineReducers({
  reducers
})