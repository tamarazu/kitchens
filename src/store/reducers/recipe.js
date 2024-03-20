import types from "../types/recipes";

const initialState = {
  randomRecipe: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_MENU:
      return {
        ...state,
        randomRecipe: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
