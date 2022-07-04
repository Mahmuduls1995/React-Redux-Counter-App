// step 4: create store 2 import (Reducer and Middleware)
// npm install redux
// src/store.js
import { createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";

const store = createStore(counterReducer);
export default store;