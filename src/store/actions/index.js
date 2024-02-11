import { SET_LOADING, SET_ERROR } from '../types'

export const set_loading = (value) => {
  return {
    type: SET_LOADING,
    payload: value
  }
}

export const set_error = (value) => {
  return {
    type: SET_ERROR,
    payload: value
  }
}