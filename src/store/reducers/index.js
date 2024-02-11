import { combineReducers } from 'redux';
import {
  SET_LOADING,
  SET_ERROR
} from '../types'

const initialState = {
  loading: false,
  error: false,
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING: 
      return {
        ...state,
        loading: action.payload
      }
    case SET_ERROR:
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