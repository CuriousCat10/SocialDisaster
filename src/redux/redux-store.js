import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";
import textFixedReducer from "./textFixedReducer";
import usersReducer from "./usersReducer";
import thunkMiddlewear from "redux-thunk";

let reducers = combineReducers({
    textFixed: textFixedReducer,
    posts: postsReducer,
    usersInfo: usersReducer,
    messages: messagesReducer,
    profile: profileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewear));

export default store;