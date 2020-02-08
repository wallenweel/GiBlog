import React from 'react'

import styles, { wrap } from './ArticleInfo.module.css'

export default function ArticleInfo() {
  return (
    <div className={wrap}>
      <h1 className={styles.title}>This is title</h1>
      <nav className={styles.tags}>
        {[1, 2, 3, 4].map(e => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className={styles.tag} key={e}>
            tag {e}
          </a>
        ))}
      </nav>
      <div className={styles.extra}>
        <span className={styles.created}>
          created: <b>2020/02/10</b>
        </span>
        <span className={styles.updated}>
          updated: <b>2020/02/10 12:11pm</b>
        </span>
        <span className={styles.updated}>
          comments: <b>13</b>
        </span>
      </div>
    </div>
  )
}
