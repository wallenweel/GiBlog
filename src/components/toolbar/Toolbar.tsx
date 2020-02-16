import React, { ReactNode } from 'react'

import { container, wrap } from './Toolbar.module.css'
import { classNames } from '../../functions/util'

export default function Toolbar({
  className,
  children
}: {
  className?: MoudleClassName
  children: ReactNode
}) {
  return (
    <div data-ui-toolbar className={classNames(className, container)}>
      <div className={wrap}>{children}</div>
    </div>
  )
}
