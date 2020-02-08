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

import { container } from './Main.module.css'

import avatar from '../../assets/images/avatar_lp.jpg'

export default function Main() {
  const [userInfo] = useState({
    avatar,
    name: 'Hahahah',
    email: 'hahaha@haha.ha',
    intro:
      'You know some birds are not meant to be caged, their feathers are just too bright.'
  })

  return (
    <div className={container}>
      <Toolbar>
        <Filter />
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
