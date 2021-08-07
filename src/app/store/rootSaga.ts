import { all, AllEffect, ForkEffect } from 'redux-saga/effects'

import { helloSaga, watchIncrementAsync } from './Sagas'

export default function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([helloSaga(), watchIncrementAsync()])
}
