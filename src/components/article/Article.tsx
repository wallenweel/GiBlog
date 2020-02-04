import React, { ReactNode } from 'react'
import { container, wrap } from './Article.module.scss'

export default function Article({ children }: { children: ReactNode }) {
  return (
    <section className={container}>
      <div className={wrap}>{children}</div>
    </section>
  )
}
