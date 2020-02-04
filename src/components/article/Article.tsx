import React, { ReactNode } from 'react'

export default function Article({ children }: { children: ReactNode }) {
  return (
    <section>
      <div>{children}</div>
    </section>
  )
}
