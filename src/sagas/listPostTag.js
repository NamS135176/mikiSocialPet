
import { call, put, take, takeLatest } from 'redux-saga/effects';
const getPostTag = async (action) => {
    const data = await fetch(`http://obnd.me/post-api/get-post-by-tag/${action.payload}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(action.payload);
    
    const list = await data.text()
    console.log(JSON.parse(list));
    return JSON.parse(list)
}

function* getPostList(action) {
    // try {
    console.log('sfsdfsdfsdfsdf');
    const listPost = yield call(getPostTag, action);
    yield put({
        type: 'GET_POST_TAG_SUCCESS',
        payload: {
            postTag: listPost
        },
    });
}

function* updateLike(action){
    yield put({
      type: 'UPDATE_LIKE_VIEW_TAG_SUCCESS',
      payload: {
        postTag : action.payload.postTag
      }
    });
  }

function* postTagSaga() {
    yield takeLatest('GET_POST_TAG', getPostList);
    yield takeLatest('UPDATE_LIKE_VIEW_TAG', updateLike)
}

export default postTagSaga;
