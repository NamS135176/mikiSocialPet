
import { call, put, take, takeLatest } from 'redux-saga/effects';
const getPostAccount = async () => {
  const data = await fetch('http://obnd-miki.herokuapp.com/get-post-follow/namnt', {
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
