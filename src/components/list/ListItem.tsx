import React, { ReactNode } from 'react'

export default function ListItem({
  num,
  children
}: {
  num: number
  children: ReactNode
}) {
  return <div data-num={num}>{children}</div>
}
