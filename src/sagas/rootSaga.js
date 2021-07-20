import {all} from 'redux-saga/effects';
import myPostSaga from './mypost';
import currentPostSaga from './currentPost';
import followPostSaga from './followedListPost';
export default function* rootSagas() {
  yield all([myPostSaga(), currentPostSaga(), followPostSaga()]);
}
