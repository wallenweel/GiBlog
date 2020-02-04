import React, { ReactNode } from 'react'
import { container, wrap } from './Drawer.module.scss'

export default function Drawer(props: { children: ReactNode }) {
  return (
    <aside className={container}>
      <div className={wrap}>{props.children}</div>
    </aside>
  )
}
