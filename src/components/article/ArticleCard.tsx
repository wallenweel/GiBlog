import React from 'react'

import Card from '../common/Card'

import styles, { wrap } from './ArticleCard.module.css'

import { subExcerpt } from '../../functions/util'

export default function ArticleCard() {
  const excerpt = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
    reiciendis asperiores consequatur reprehenderit dolor voluptas
    exercitationem ducimus quos nihil iste! Culpa ea deleniti rem tempora
    minus nemo praesentium dignissimos expedita.`

  return (
    <Card className={wrap}>
      <h4 className={styles.title}>This is title</h4>
      <p className={styles.excerpt}>{subExcerpt(excerpt, 20)}</p>
      <nav className={styles.tags}>
        {[1, 2].map(e => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a key={e}>tag {e}</a>
        ))}
      </nav>
      <div className={styles.extra}>
        <span className={styles.date} />
      </div>
    </Card>
  )
}
