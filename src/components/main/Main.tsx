import React from 'react'

import Toolbar from '../toolbar/Toolbar'
import Drawer from '../drawer/Drawer'
import List from '../list/List'
import Article from '../article/Article'

import { container } from './Main.module.scss'

export default () => (
  <main className={container}>
    {false && <Toolbar />}

    <Drawer />
    <List />
    <Article />
  </main>
)
