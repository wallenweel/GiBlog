import React, { ReactNode } from 'react'

import { wrap } from './ListItem.module.css'
import { classNames } from '../../functions/util'

export default function ListItem({
  num,
  className,
  children
}: {
  num: number
  className?: MoudleClassName
  children: ReactNode
}) {
  return (
    <article className={classNames(wrap, className)} data-num={num}>
      {children}
    </article>
  )
}
