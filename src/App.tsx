import React, { ReactNode } from 'react'
import styles from './App.module.css'
import Main from './components/main/Main'

const App = (props: { children: ReactNode }) => (
  <div className={styles['App']}>{props.children}</div>
)

export default () => (
  <App>
    <Main />
  </App>
)
