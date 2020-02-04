import React, { ReactNode } from 'react'

export default function List({ children }: { children: ReactNode }) {
  return (
    <section>
      <div>{children}</div>
    </section>
  )
}
