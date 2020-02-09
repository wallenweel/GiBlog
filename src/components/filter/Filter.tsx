import React, { ReactNode, ReactElement } from 'react'

import { wrap } from './Filter.module.css'
import { slots } from '../../functions/util'

export default function Filter({ children }: { children?: ReactNode }) {
  const { left, right } = slots(children as ReactElement[])

  return (
    <form className={wrap}>
      {left}
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      {right}
    </form>
  )
}
