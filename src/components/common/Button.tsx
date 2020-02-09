import React, { ReactNode } from 'react'

import styles from './Button.module.css'

import Icon from '../common/Icon'
import { classNames } from '../../functions/util'

export function NormalButton({
  children,
  className
}: {
  children: ReactNode
  className: MoudleClassName
}) {
  return (
    <button className={classNames(className, styles.normal)}>{children}</button>
  )
}

export function IconButton({
  children: icon,
  className
}: {
  children: svgIconName
  className?: MoudleClassName
}) {
  return (
    <button className={classNames(className, styles.icon)}>
      <Icon name={icon} />
    </button>
  )
}

export default NormalButton
