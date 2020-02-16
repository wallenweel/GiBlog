import React, { ReactNode } from 'react'

import { container, wrap } from './List.module.css'
import { classNames } from '../../functions/util'

export default function List({
  className,
  children
}: {
  className?: MoudleClassName
  children: ReactNode
}) {
  return (
    <section data-ui-list className={classNames(className, container)}>
      <div className={wrap}>{children}</div>
    </section>
  )
}
