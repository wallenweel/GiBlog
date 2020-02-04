import React, { ReactNode } from 'react'
import { container } from './Article.module.scss'

export default function Article({ children }: { children: ReactNode }) {
  return <section className={container}>{children}</section>
}
