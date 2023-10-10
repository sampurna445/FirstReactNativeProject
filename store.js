import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import {createLogger} from 'redux-logger';
import carReducer from './features/cars/carSlice';
import userAuthReducer from './features/userAuth/userAuthSlice';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  preidicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car: carReducer,
    userAuth: userAuthReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
