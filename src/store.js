import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/homeReducer"
const reducer = combineReducers({
    home: homeReducer,

});

let intialState = {};

const middleware = [thunk];
const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))

);
export default store;