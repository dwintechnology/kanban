import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { reducers } from './reducers';

let store;

export const getStore = () => store;

export function Store() {
    const middleware = [ReduxThunk];

    store = configureStore({
        reducer: reducers(),
        middleware,
        devTools: true,
        enhancers: [],
        preloadedState: {},
    });

    return store;
}