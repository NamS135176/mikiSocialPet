import {all} from 'redux-saga/effects';
import myPostSaga from './mypost';
import currentPostSaga from './currentPost';
import followPostSaga from './followedListPost';
import currentUserReducer from '../reducers/currentUser';
import currentUserSaga from './currentUser';
export default function* rootSagas() {
  yield all([myPostSaga(), currentPostSaga(), followPostSaga(), currentUserSaga()]);
}
