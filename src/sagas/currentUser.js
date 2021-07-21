
import { call, put, take, takeLatest } from 'redux-saga/effects';
const getUser = async (action) => {
    const data = await fetch('http://obnd.me/get-account', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            account: action.payload,

        })
    })
    const user = await data.text()
    return JSON.parse(user)
}

function* getCurrentUser(action) {
    // try {
    const user = yield call(getUser, action);
    yield put({
        type: 'GET_CURRENT_USER_SUCCESS',
        payload: {
            user: user
        },
    });
}

function* currentUserSaga() {
    yield takeLatest('GET_CURRENT_USER', getCurrentUser);
}

export default currentUserSaga;
