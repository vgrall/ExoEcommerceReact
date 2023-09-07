// store.js

import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  // Autres réducteurs si vous en avez
});

const store = createStore(rootReducer);

export default store;
