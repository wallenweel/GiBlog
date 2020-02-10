import React, { ReactNode, ReactElement } from 'react'

import styles, { wrap } from './Filter.module.css'
import { slots } from '../../functions/util'

export default function Filter({ children }: { children?: ReactNode }) {
  const { left, right } = slots(children as ReactElement[])

  return (
    <form className={wrap}>
      {left}
      <input className={styles.input} type="text" placeholder="Search..." />
      {right}
    </form>
  )
}
