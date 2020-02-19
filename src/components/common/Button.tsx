import React, { ReactNode, CSSProperties, ComponentProps } from 'react'

import styles from './Button.module.css'

import Picture from '../common/Picture'
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
  size = 42,
  ...others
}: {
  children: svgIconName
} & ButtonWrap) {
  const props: ButtonWrap = {
    height: size,
    width: size,
    radius: size
  }

  return (
    <ButtonWrap data-ui-icon-button={icon} {...props} {...others}>
      <Icon name={icon} />
    </ButtonWrap>
  )
}

export function AvatarButton({
  name = '',
  size = 42,
  border = 4,
  url,
  ...others
}: {
  name?: string
  size?: numstr
  border?: numstr
  url?: string
} & ButtonWrap) {
  const props: ButtonWrap = {
    height: size,
    width: size,
    radius: size
  }
  const styleObject: CSSProperties = {}

  if (border) styleObject.borderWidth = `${border}rem`

  const pictureSize: number =
    parseInt(size as string, 10) - parseInt(border as string, 10) * 2

  return (
    <ButtonWrap
      data-ui-avatar-button={name}
      className={styles.avatar}
      style={styleObject}
      {...props}
      {...others}
    >
      <Picture
        width={pictureSize}
        height={pictureSize}
        radius={pictureSize}
        alt={name}
        {...{ url }}
      />
    </ButtonWrap>
  )
}

export function ButtonWrap({
  children,
  radius = 4,
  height = 32,
  width = 96,
  className,
  style,

  ...others
}: ButtonWrap) {
  const styleObject: CSSProperties = { ...style }

  if (radius) styleObject.borderRadius = `${radius}rem`
  if (height) styleObject.height = `${height}rem`
  if (width) styleObject.width = `${width}rem`

  return (
    <button
      type="button"
      className={classNames(className, styles.wrap)}
      style={styleObject}
      {...others}
    >
      {children}
    </button>
  )
}

export default ButtonWrap

type ButtonWrap = {
  className?: MoudleClassName
  size?: numstr
  radius?: numstr
  height?: numstr
  width?: numstr
  children?: ReactNode
} & ComponentProps<'button'>
