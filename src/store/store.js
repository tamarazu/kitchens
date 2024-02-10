import { configureStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default configureStore(reducers, applyMiddleware(thunk));
