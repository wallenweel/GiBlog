import React, { ComponentProps } from 'react'

import { IconButton } from '../common/Button'

export default function DrawerButton({ ...others }: ComponentProps<any>) {
  return (
    <>
      <IconButton {...others}>{true ? 'menu' : 'menu_open'}</IconButton>
      {/* <IconButton>menu_open</IconButton> */}
    </>
  )
}
