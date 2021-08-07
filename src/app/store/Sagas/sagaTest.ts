import {
  put,
  takeEvery,
  ForkEffect,
  CallEffect,
  PutEffect,
  delay,
} from 'redux-saga/effects'
import { asyncIncrement, increaseNumber } from '../Slices/sliceTest'

function* helloSaga(): Generator<void> {
  /* eslint-disable no-console */
  yield console.log('Hello Sagas!')
}

function* incrementAsync({
  payload,
}: ReturnType<typeof asyncIncrement>): Generator<
  | CallEffect<true>
  | PutEffect<{ payload: { numberToIncrease: number }; type: string }>,
  void,
  unknown
> {
  const { numberToIncrease } = payload

  yield delay(1000)
  yield put(increaseNumber({ numberToIncrease }))
}

function* watchIncrementAsync(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(asyncIncrement, incrementAsync)
}
export { helloSaga, watchIncrementAsync }
