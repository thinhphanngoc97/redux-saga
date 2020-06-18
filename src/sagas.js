import { call, put, takeEvery } from 'redux-saga/effects';
import api from './api';

function* changeValue() {
    try {
        yield call(api);
        yield put({type: "CHANGE_VALUE", number: 10})
    } catch (error) {
        console.log(error);
    }
}

function* changeValueSaga() {
    yield takeEvery("STARTED_CHANGE", changeValue);
}

export default changeValueSaga;
