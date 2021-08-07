import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { testSelector } from '@store/rootReducer'
import { asyncIncrement } from '@store/Slices/sliceTest'

import styles from './Test.styles.module.scss'

export const Test = (): JSX.Element => {
  const dispatch = useDispatch()
  const { asyncCounter } = useSelector(testSelector)
  const [isLight, setIsLight] = useState<boolean>(true)

  const onAsyncIncrement = (): void => {
    dispatch(asyncIncrement(1))
  }

  const pClasses = cn(
    styles.Text,
    isLight ? styles.ThemeLight : styles.ThemeDark,
  )

  return (
    <div className="test">
      <button
        className={pClasses}
        onClick={(): void => setIsLight(!isLight)}
        type="button"
      >
        Сменить тему
      </button>
      <button onClick={(): void => onAsyncIncrement()} type="button">
        asyncIncrement {asyncCounter}
      </button>
    </div>
  )
}
