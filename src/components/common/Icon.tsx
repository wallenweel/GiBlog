import React, { ReactNode } from 'react'

import * as icons from './icons'

// import { ReactComponent as Language } from './icons/language.svg'

const renderIcon = (name: string): ReactNode | null => {
  switch (name) {
    case 'language':
      // return <Language />
      return <icons.Language />
    default:
      return null
  }
}

export default function Icon({ name }: { name: string }) {
  return <i>{renderIcon(name)}</i>
}
