import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
));
sagaMiddleware.run(todoSagas);

export default store;