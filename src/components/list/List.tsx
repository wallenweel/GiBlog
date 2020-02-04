import React, { ReactNode } from 'react'
import { container } from './List.module.scss'

export default function List({ children }: { children: ReactNode }) {
  return <section className={container}>{children}</section>
}
