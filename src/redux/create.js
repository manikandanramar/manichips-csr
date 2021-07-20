import { createStore, applyMiddleware, compose  } from 'redux';
import reducers from './reducer.js';
import clientMiddleware from './middlewares/clientMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState, fetch) {
  const middlewares = [
    clientMiddleware(fetch)
  ];

  const composeEnhancers = [applyMiddleware(...middlewares)];

  return createStore(
    reducers,
    initialState,
    // If development mode, devtools will be available
    __DEVELOPMENT__
      ? composeWithDevTools(...composeEnhancers)
      : compose(...composeEnhancers)
  );
}