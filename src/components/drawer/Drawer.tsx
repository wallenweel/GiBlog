import React, { ReactNode } from 'react'
import { container } from './Drawer.module.scss'

export default function Drawer({ children }: { children: ReactNode }) {
  return <aside className={container}>{children}</aside>
}
