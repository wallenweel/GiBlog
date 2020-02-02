import React, { ReactNode } from 'react'
import styles from './App.module.css'
import Main from './components/Main'
import { Trans } from 'react-i18next'

const App = (props: { children: ReactNode }) => (
  <div className={styles['App']}>{props.children}</div>
)

export default () => (
  <App>
    <Main>
      <div><Trans>test</Trans> child</div>
    </Main>
  </App>
)
