import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ISliceTest {
  asyncCounter: number
}

const sliceTestInitialState: ISliceTest = {
  asyncCounter: 0,
}

const sliceTestSlice = createSlice({
  name: 'sliceTest',
  initialState: sliceTestInitialState,
  reducers: {
    increaseNumber(
      state: ISliceTest,
      action: PayloadAction<{ numberToIncrease: number }>,
    ): void {
      state.asyncCounter += action.payload.numberToIncrease
    },

    asyncIncrement: {
      reducer: (): void => {},
      prepare(numberToIncrease: number): {
        payload: { numberToIncrease: number }
      } {
        return { payload: { numberToIncrease } }
      },
    },
  },
})

export const { increaseNumber, asyncIncrement } = sliceTestSlice.actions
export default sliceTestSlice.reducer
