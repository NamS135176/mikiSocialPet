
import { call, put, take, takeLatest } from 'redux-saga/effects';
const getPostId = async (action) => {
  const data = await fetch(`http://obnd.me/post-api/get-post/${action.payload}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const list = await data.text()
  return JSON.parse(list)
}

function* getPost(action) {
  // try {
  const post = yield call(getPostId, action);
  yield put({
    type: 'GET_POST_SUCCESS',
    payload: {
      post : post
    },
  });
}

function* currentPostSaga() {
  yield takeLatest('GET_POST', getPost);
}

export default currentPostSaga;
