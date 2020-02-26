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
import dataAttrs from './dataAttrs'

import avatar from '../../assets/images/avatar_lp.jpg'

export default function Main() {
  const [userInfo] = useState({
    avatar,
    name: 'Hahahah',
    email: 'hahaha@haha.ha',
    intro:
      'You know some birds are not meant to be caged, their feathers are just too bright.'
  })

  const Mask = ({ onClick }: any) => {
    return <div data-ui-main-mask className={styles.mask} onClick={onClick} />
  }
  const [attrs, toggle, removeLast] = dataAttrs(useState([] as string[]))

  return (
    <div data-ui-main className={view} {...attrs}>
      <Mask onClick={() => removeLast()} />

      <Toolbar>
        <ListButton onClick={() => toggle(List.name)} />
        <Filter>
          <DrawerButton onClick={() => toggle(Drawer.name)} data-slot="left" />
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
