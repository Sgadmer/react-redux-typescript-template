import React, { FC, useState } from 'react'
import styles from '@styles/test.styles.module.scss'
import { hot } from 'react-hot-loader/root'
import cn from 'classnames'

const App: FC = () => {
  const [isLight, setIsLight] = useState<boolean>(true)

  const pClasses = cn(
    styles.root__text,
    isLight ? styles.ThemeLight : styles.ThemeDark,
  )

  return (
    <div className="test">
      <button
        className={pClasses}
        onClick={(): void => setIsLight(!isLight)}
        type="button"
      >
        ЦУЦУeertetert!@!@tutu!@!@1УЦ
      </button>
    </div>
  )
}
export default hot(App)
