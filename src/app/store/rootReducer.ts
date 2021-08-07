import { combineReducers } from '@reduxjs/toolkit'

import sliceTestReducer, { ISliceTest } from './Slices/sliceTest'

const rootReducer = combineReducers({
  test: sliceTestReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const testSelector = (state: RootState): ISliceTest => state.test

export default rootReducer
