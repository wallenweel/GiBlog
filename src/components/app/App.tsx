import React from 'react'

import Main from '../main/Main'

import { container } from './App.module.css'

// import { ReactComponent as Language } from '../../assets/icons/language.svg'
import Icon from '../common/Icon'

export default function App() {
  return (
    <div className={container}>
      <Main />
      {/* <Language /> */}
      <Icon name="language" />
    </div>
  )
}
