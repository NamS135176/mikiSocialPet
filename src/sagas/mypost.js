
import { call, put, take, takeLatest } from 'redux-saga/effects';
const getPostAccount = async (action) => {
  const data = await fetch(`http://obnd.me/post-api/get-post-list-by-account/${action.payload}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const list = await data.text()
  return JSON.parse(list)
}

function* getMyPost(action) {
  // try {
  const listPostData = yield call(getPostAccount, action);
  yield put({
    type: 'GET_MY_POST_SUCCESS',
    payload: {
      listMyPost : listPostData
    },
  });
}

function* myPostSaga() {
  yield takeLatest('GET_MY_POST', getMyPost);
}

export default myPostSaga;
