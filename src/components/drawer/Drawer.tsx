import React, { ReactNode } from 'react'
import { container } from './Drawer.module.css'

export default function Drawer({ children }: { children: ReactNode }) {
  return <aside className={container}>{children}</aside>
}
