import React from 'react'

import Picture from '../common/Picture'
import Avatar from '../avatar/Avatar'

import styles, { wrap } from './OwnerArea.module.css'

export default function OwnerArea({
  user: { avatar, name, email, intro = '' }
}: {
  user: UserInfo
}) {
  return (
    <div className={wrap}>
      <Picture url={avatar} className={styles.picture} />
      <Avatar url={avatar} className={styles.avatar} size="42" />
      <div className={styles.name}>{name}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.intro}>{intro}</div>
    </div>
  )
}
