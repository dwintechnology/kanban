import { combineReducers } from '@reduxjs/toolkit';
import tasksSlice from './tasks';


export const reducers = () =>
    combineReducers({
        tasks: tasksSlice.reducer,
    });