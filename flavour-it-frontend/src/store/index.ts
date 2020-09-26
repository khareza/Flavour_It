/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './root-reducer';
import saga from './root-saga';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = (rootReducer: any, rootSaga: any) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore(reducer, saga);
