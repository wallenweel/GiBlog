import React from 'react'

import { IconButton as IconBtn } from '../common/Button'

export default function DrawerBtn() {
  return (
    <>
      <IconBtn>{true ? 'menu' : 'menu_open'}</IconBtn>
      {/* <IconBtn>menu_open</IconBtn> */}
    </>
  )
}
