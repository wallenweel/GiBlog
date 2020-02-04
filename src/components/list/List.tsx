import React, { ReactNode } from 'react'
import { container, wrap } from './List.module.scss'

export default function List({ children }: { children: ReactNode }) {
  return (
    <section className={container}>
      <div className={wrap}>{children}</div>
    </section>
  )
}
