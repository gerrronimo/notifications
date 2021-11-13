import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from 'redux-thunk';

// REDUX DEVTOOL
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export type StoreType = ReturnType<typeof store.getState>