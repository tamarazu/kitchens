import types from "../types/menu";

const initialState = {
  menu: {},
  tableNumber: 0,
  menus: [],
  categories: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MENU: 
      return {
        ...state,
        menu: action.payload
      }
    case types.SET_TABLE_NUMBER:
      return {
        ...state,
        tableNumber: action.payload
      }
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
