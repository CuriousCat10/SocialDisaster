import { combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";
import postsReducer from "./postsReducer";
import textFixedReducer from "./textFixedReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    textFixed: textFixedReducer,
    posts: postsReducer,
    usersInfo: usersReducer,
    messages: messagesReducer
});

let store = createStore(reducers);

export default store;