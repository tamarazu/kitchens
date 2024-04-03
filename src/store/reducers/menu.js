import types from "../types/menu";

const initialState = {
  menus: [],
  categories: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_MENU:
      return {
        ...state,
        menus: action.payload,
      };
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
};

export default reducers;
