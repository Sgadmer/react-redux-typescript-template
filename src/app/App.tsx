import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'

import { Test } from '@components/common'
import store from './store/store'

const App = (): JSX.Element => (
    <Provider store={store}>
      <Test />
    </Provider>
  )

export default hot(App)
