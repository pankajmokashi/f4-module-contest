import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";
import selectedReducer from "./reducers/selectedReducer";

const rootReducer = combineReducers({
    postReducer: postReducer,
    selectedReducer: selectedReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;