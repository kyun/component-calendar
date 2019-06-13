import { createStore, combineReducers } from "redux";

import calendar from "./calendar";

// mount it on the Store
export default createStore(combineReducers({ calendar }));
