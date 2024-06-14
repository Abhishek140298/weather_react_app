import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {IRootState} from '../store/rootReducer'


export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

