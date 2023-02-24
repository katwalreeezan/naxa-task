import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA, fetchDataSuccess, fetchDataFailure } from '../redux/actions';
import axios from 'axios';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://admin.naxa.com.np/api/services');
    const data = yield response.data;
    // const cleanedData = yield response.data.replace(/<p><\/p>/g, '');
    // const parsedData = ReactHtmlParser(cleanedData);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}