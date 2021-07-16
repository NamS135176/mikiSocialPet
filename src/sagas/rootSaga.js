import {all} from 'redux-saga/effects';
import myPostSaga from './mypost';
export default function* rootSagas() {
  yield all([myPostSaga()]);
}
