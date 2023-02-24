import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA, fetchDataSuccess, fetchDataFailure } from '../redux/actions';

function* fetchDataSaga() {
  try {
    const response = yield call(fetch, 'https://admin.naxa.com.np/api/services');
    const data = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}