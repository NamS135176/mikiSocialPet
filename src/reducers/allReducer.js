import userInfo from "./userInfo";
import myPostReducer from "./myPostReducer";
import currentPostReducer from "./currentPost";
import followPostReducer from "./followPost";
import {combineReducers} from 'redux'
export default combineReducers({
    userInfo:userInfo,
    myPost: myPostReducer,
    currentPost: currentPostReducer,
    followPost: followPostReducer
});