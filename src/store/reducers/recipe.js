import types from "../types/recipes";

const initialState = {
  randomRecipe: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RANDOM_RECIPE:
      return {
        ...state,
        randomRecipe: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
