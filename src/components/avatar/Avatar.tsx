import React from 'react'

import Picture from '../common/Picture'

import blankAvatar from './blank-avatar.png'

export default function Avatar({
  url = blankAvatar,
  size = 72,
  height = size,
  width = size,
  radius = size,

  ...others
}: {
  size?: numstr
  radius?: numstr
} & PictureProps) {
  return <Picture {...{ url, height, width, radius, ...others }} />
}
