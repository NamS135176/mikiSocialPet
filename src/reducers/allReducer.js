import userInfo from "./userInfo";
import myPostReducer from "./myPostReducer";
import {combineReducers} from 'redux'
export default combineReducers({
    userInfo:userInfo,
    myPost: myPostReducer
});