import React, { ReactNode } from 'react'
import { container } from './Article.module.css'

export default function Article({ children }: { children: ReactNode }) {
  return <section className={container}>{children}</section>
}
