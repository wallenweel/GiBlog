import React, { ReactNode } from 'react'

import { wrap } from './Card.module.css'
import { classNames } from '../../functions/util'

export default function Card({
  className,
  children
}: {
  className?: MoudleClassName
  children?: ReactNode
}) {
  return <div className={classNames(wrap, className)}>{children}</div>
}
