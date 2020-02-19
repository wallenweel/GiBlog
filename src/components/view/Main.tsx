import React, { useState } from 'react'

import Toolbar from '../toolbar/Toolbar'
import Filter from '../filter/Filter'
import DrawerButton from '../drawer/DrawerButton'
import ListButton from '../list/ListButton'
import { AvatarButton } from '../common/Button'

import Drawer from '../drawer/Drawer'
import OwnerArea from '../drawer/OwnerArea'
import Store from '../store/Store'
import Taxonomy from '../taxonomy/Taxonomy'

import List from '../list/List'
import ListItem from '../list/ListItem'
import ArticleCard from '../article/ArticleCard'

import Article from '../article/Article'
import ArticleInfo from '../article/ArticleInfo'
import ArticleContent from '../article/ArticleContent'

import styles, { view } from './Main.module.css'

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
  const toggleDataUI = (
    target: string | { name: string },
    toggle?: boolean
  ): (() => boolean) => {
    const [n, r, a] = [
      `data-ui-${(typeof target === 'string'
        ? target
        : target.name
      ).toLowerCase()}-on`,
      () => UIData.filter(_n => _n !== n),
      () => [...UIData, n]
    ]
    const callback = (): boolean => {
      if (toggle === undefined) {
        const has = UIData.includes(n)
        setUIData(has ? r() : a())
        return has
      } else {
        setUIData(toggle ? a() : r())
        return toggle
      }
    }

    maskCallbacks.push(callback)

    return callback
  }
  const UIDataProps = UIData.reduce((p: any, c) => (p[c] = true) && p, {})

  return (
    <div data-ui-main className={view} {...UIDataProps}>
      <Mask />

      <Toolbar>
        <ListButton onClick={toggleDataUI(List)} />
        <Filter>
          <DrawerButton onClick={toggleDataUI(Drawer)} data-slot="left" />
        </Filter>
        <AvatarButton name="right" url={userInfo.avatar} />
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
        <ArticleContent />
      </Article>
    </div>
  )
}
