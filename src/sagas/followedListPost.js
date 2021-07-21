
import { call, put, take, takeLatest } from 'redux-saga/effects';
const getFollow = async (action) => {
  const data = await fetch(`http://obnd.me/post-api/get-post-follow/${action.payload}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const list = await data.text()
  return JSON.parse(list)
}

function* getPostFollow(action) {
  const listFollowPost = yield call(getFollow, action);
  yield put({
    type: 'GET_FOLLOW_POST_SUCCESS',
    payload: {
      listFollowPost : listFollowPost
    }
  });
}

function* updateLike(action){
  yield put({
    type: 'UPDATE_LIKE_VIEW_SUCCESS',
    payload: {
      listFollowPost : action.payload.listFollowPost
    }
  });
}

function* followPostSaga() {
  yield takeLatest('GET_FOLLOW_POST', getPostFollow);
  yield takeLatest('UPDATE_LIKE_VIEW', updateLike)
}

export default followPostSaga;
