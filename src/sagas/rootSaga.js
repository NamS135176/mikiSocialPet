import {all} from 'redux-saga/effects';
import myPostSaga from './mypost';
import currentPostSaga from './currentPost';
export default function* rootSagas() {
  yield all([myPostSaga(), currentPostSaga()]);
}
