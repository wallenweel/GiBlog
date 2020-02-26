import React, { ComponentProps, useState } from 'react'

import { IconButton } from '../common/Button'

export default function ListButton({
  onClick: toggle,
  ...others
}: { onClick: () => boolean } & ComponentProps<'button'>) {
  const [turnOn, setTurnOn] = useState(false)
  const listener = () => setTurnOn(toggle())

  return (
    <IconButton data-ui-list-button onClick={listener} {...others}>
      {!turnOn ? 'view_day-line' : 'view_day'}
    </IconButton>
  )
}
