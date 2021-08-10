import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import selectUserReducer from "./selectUserReducer";
import selectSupplierReducer from "./selectSupplierReducer";

const rootReducer = combineReducers({
  selectUserReducer,
  selectSupplierReducer,
});

const middlewares = applyMiddleware(thunk);
export const store = createStore(rootReducer, middlewares);

export default store;
