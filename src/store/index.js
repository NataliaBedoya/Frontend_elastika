import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import selectUserReducer from "./selectUserReducer";

const rootReducer = combineReducers({
  selectUserReducer,
});

const middlewares = applyMiddleware(thunk);
export const store = createStore(rootReducer, middlewares);

export default store;
