import React, { ReactNode, CSSProperties, ComponentProps } from 'react'

import styles from './Button.module.css'

import Icon from '../common/Icon'
import { classNames } from '../../functions/util'

export function NormalButton({
  className,
  children
}: {
  className: MoudleClassName
  children: ReactNode
}) {
  return (
    <button className={classNames(className, styles.normal)}>{children}</button>
  )
}

export function IconButton({
  children: icon,
  size = 48,
  radius = size,
  height = size,
  width = size,
  className,

  ...others
}: {
  className?: MoudleClassName
  size?: numstr
  radius?: numstr
  height?: numstr
  width?: numstr
  children: svgIconName
} & ComponentProps<any>) {
  const styleObject: CSSProperties = {}

  if (radius) styleObject.borderRadius = `${radius}rem`
  if (height) styleObject.height = `${height}rem`
  if (width) styleObject.width = `${width}rem`

  return (
    <button
      type="button"
      className={classNames(className, styles.icon)}
      style={styleObject}
      {...others}
    >
      <Icon name={icon} />
    </button>
  )
}

export default NormalButton
