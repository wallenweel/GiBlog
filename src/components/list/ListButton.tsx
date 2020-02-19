import React, { ComponentProps } from 'react'

import { IconButton } from '../common/Button'

export default function ListButton({ ...others }: ComponentProps<any>) {
  return <IconButton {...others}>view_day</IconButton>
}
