
import { applyMiddleware, createStore,Store } from 'redux';
import { thunk,ThunkDispatch } from 'redux-thunk';
import reducer from './rootReducer'
import { AnyAction } from 'redux';


interface AppState {
    // Define your state structure here
  }
  
  // Define the store type
  type AppStore = Store<AppState, AnyAction> & {
    dispatch: ThunkDispatch<AppState, undefined, AnyAction>;
  };

export const initStore: AppStore  =  createStore(reducer, {}, applyMiddleware(thunk));

