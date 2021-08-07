/* eslint-disable import/no-extraneous-dependencies */

import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export default store
