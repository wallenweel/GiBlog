import React, { ReactNode } from 'react'

import { container, wrap } from './Toolbar.module.css'

export default function Toolbar({ children }: { children: ReactNode }) {
  return (
    <div className={container}>
      <div className={wrap}>{children}</div>
    </div>
  )
}
