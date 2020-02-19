import React, { ComponentProps } from 'react'

import { IconButton } from '../common/Button'

export default function ListButton({ ...others }: ComponentProps<any>) {
  return (
    <IconButton data-ui-list-button {...others}>
      view_day
    </IconButton>
  )
}
