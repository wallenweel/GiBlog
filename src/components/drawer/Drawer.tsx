import React, { ReactNode } from 'react'

import { container, wrap } from './Drawer.module.css'
import { classNames } from '../../functions/util'

export default function Drawer({
  className,
  children
}: {
  className?: MoudleClassName
  children: ReactNode
}) {
  return (
    <aside className={classNames(className, container)}>
      <div className={wrap}>{children}</div>
    </aside>
  )
}
