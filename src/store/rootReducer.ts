import { combineReducers } from 'redux';
import { appReducer } from '../pages/Admin/reducers';

const reducer=combineReducers({
appReducer
})

export default reducer
export type IRootState = ReturnType<typeof reducer>;
