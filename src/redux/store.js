import { legacy_createStore as createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';
import Reducers from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;