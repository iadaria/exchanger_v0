import { applyMiddleware, createStore, compose } from 'redux';
import { configuredReactotron } from '../../initial-imports/reactotron';
import thunk from 'redux-thunk';
import { verifyAuth } from '../../features/auth/authActions';
import rootReducer from './rootReducer';

export function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    configuredReactotron.createEnhancer(),
  );

  const store = createStore(rootReducer, enhancer);
  store.dispatch(verifyAuth());

  return store;
}

const _ = configureStore();
export type AppDispatch = typeof _.dispatch;
