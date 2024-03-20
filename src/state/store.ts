import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {Sagas} from './sagas';
import authStore from './auth/reducer.ts';
import userStore from './user/reducer.ts';
import brandStore from './brand/reducer.ts';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    auth: authStore,
    user: userStore,
    brand: brandStore,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(Sagas);
