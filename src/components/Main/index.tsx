import React from 'react'
import styles from './styles.module.css'
import Toolbar from '../Toolbar'
import Drawer from '../Drawer'
import List from '../List'
import Article from '../Article'

export default () => (
  <div className={styles['Main']}>
    {false && <Toolbar />}

    <Drawer />
    <List />
    <Article />
  </div>
)
