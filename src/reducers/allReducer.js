import userInfo from "./userInfo";
import myPostReducer from "./myPostReducer";
import currentPostReducer from "./currentPost";
import {combineReducers} from 'redux'
export default combineReducers({
    userInfo:userInfo,
    myPost: myPostReducer,
    currentPost: currentPostReducer
});