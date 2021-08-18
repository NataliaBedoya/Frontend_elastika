import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import selectUserReducer from "./selectUserReducer";
import selectSupplierReducer from "./selectSupplierReducer";
import selectCustomerReducer from "./selectCustomerReducer";
import selectMaterialReducer from "./selectMaterialReducer";

const rootReducer = combineReducers({
  selectUserReducer,
  selectSupplierReducer,
  selectCustomerReducer,
  selectMaterialReducer,
});

const middlewares = applyMiddleware(thunk);
export const store = createStore(rootReducer, middlewares);

export default store;
