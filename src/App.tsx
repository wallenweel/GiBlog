import React, { ReactNode } from 'react'

import Main from './components/main/Main'

const App = (props: { children: ReactNode }) => <>{props.children}</>

export default () => (
  <App>
    <Main />
  </App>
)
