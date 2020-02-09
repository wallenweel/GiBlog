import React, { ReactNode } from 'react'

import Icon from '../common/Icon'

export function NormalButton({ children }: { children: ReactNode }) {
  return <button>{children}</button>
}

export function IconButton({ children: icon }: { children: svgIconName }) {
  return (
    <button>
      <Icon name={icon} />
    </button>
  )
}

export default NormalButton
