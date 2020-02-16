import React, { useState } from 'react'

import Toolbar from '../toolbar/Toolbar'
import Filter from '../filter/Filter'
import Drawer from '../drawer/Drawer'
import OwnerArea from '../drawer/OwnerArea'
import Store from '../store/Store'
import Taxonomy from '../taxonomy/Taxonomy'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Article from '../article/Article'
import ArticleCard from '../article/ArticleCard'
import ArticleInfo from '../article/ArticleInfo'

import DrawerButton from '../drawer/DrawerButton'

import styles, { view } from './Main.module.css'
// import layouts from './layout.module.css'

import avatar from '../../assets/images/avatar_lp.jpg'

const maskCallbacks: (() => void)[] = []
const Mask = () => {
  return (
    <div
      data-ui-main-mask
      className={styles.mask}
      onClick={() =>
        maskCallbacks.length && maskCallbacks[maskCallbacks.length - 1]()
      }
    />
  )
}

export default function Main() {
  const [userInfo] = useState({
    avatar,
    name: 'Hahahah',
    email: 'hahaha@haha.ha',
    intro:
      'You know some birds are not meant to be caged, their feathers are just too bright.'
  })

  const [UIData, setUIData] = useState([] as string[])
  const toggleDataUIs = (
    target: string | { name: string },
    toggle?: boolean
  ): (() => void) => {
    const [n, r, a] = [
      `data-ui-${(typeof target === 'string'
        ? target
        : target.name
      ).toLowerCase()}-on`,
      () => UIData.filter(_n => _n !== n),
      () => [...UIData, n]
    ]

    const callback = (): void => {
      if (toggle === undefined) setUIData(UIData.includes(n) ? r() : a())
      else setUIData(toggle ? a() : r())
    }

    maskCallbacks.push(callback)

    return callback
  }
  const UIDataProps = UIData.reduce((p: any, c) => (p[c] = true) && p, {})

  return (
    <div data-ui-main className={view} {...UIDataProps}>
      <Mask />

      <Toolbar>
        <Filter>
          <DrawerButton onClick={toggleDataUIs(Drawer)} data-slot="left" />
        </Filter>
      </Toolbar>

      <Drawer>
        <OwnerArea user={userInfo} />
        {false && <Store />}
        {false && <Taxonomy />}
        {/* <NavTag />
          <NavCategory />
        </Taxonomy> */}
      </Drawer>

      <List>
        {(Array(12).fill(null) || []).map((_, i) => (
          <ListItem num={i + 1} key={i}>
            <ArticleCard />
          </ListItem>
        ))}
      </List>

      <Article>
        <ArticleInfo />
      </Article>
    </div>
  )
}
