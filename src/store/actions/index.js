import types from '../types'

export const set_loading = (value) => {
  return {
    type: types.SET_LOADING,
    payload: value
  }
}

export const set_error = (value) => {
  return {
    type: types.SET_ERROR,
    payload: value
  }
}