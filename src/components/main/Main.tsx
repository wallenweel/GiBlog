import React from 'react'

import Toolbar from '../toolbar/Toolbar'
import Drawer from '../drawer/Drawer'
import OwnerArea from '../drawer/OwnerArea'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Article from '../article/Article'
import ArticleInfo from '../article/ArticleInfo'

import { container, wrap } from './Main.module.scss'

export default function Main() {
  return (
    <main className={container}>
      <div className={wrap}>
        {false && <Toolbar />}

        <Drawer>
          <OwnerArea />
          {/* <Sources /> */}
          {/* <Taxonomy>
          <NavTag />
          <NavCategory />
        </Taxonomy> */}
        </Drawer>

        <List>
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <ListItem num={i + 1} key={i}>
                Item {i + 1}
              </ListItem>
            ))}
        </List>

        <Article>
          <ArticleInfo />
        </Article>
      </div>
    </main>
  )
}
