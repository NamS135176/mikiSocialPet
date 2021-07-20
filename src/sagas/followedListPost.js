
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

function* followPostSaga() {
  yield takeLatest('GET_FOLLOW_POST', getPostFollow);
}

export default followPostSaga;
