/* eslint-disable no-constant-condition */
import React, { ComponentProps } from 'react'

import { IconButton } from '../common/Button'

export default function DrawerButton({ ...others }: ComponentProps<'button'>) {
  return (
    <IconButton data-ui-drawer-button {...others}>
      {true ? 'menu' : 'menu_open'}
    </IconButton>
  )
}
