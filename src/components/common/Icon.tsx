import React, { SVGAttributes } from 'react'
import camelCase from 'camelcase'

import * as icons from './icons'
import { wrap } from './Icon.module.css'

export default function Icon({
  name,
  title,
  size = 24,
  height = size,
  width = size,
  fill = 'currentColor',

  ...others
}: {
  name: svgIconName
  size?: numstr
  title?: string
} & SVGAttributes<any>) {
  // TODO: improve here, remove the Svg variable
  const Svg = (icons as SvgIcons)[camelCase(name, { pascalCase: true })]

  return (
    <i data-icon={name} className={wrap}>
      <Svg {...{ title, height, width, fill, ...(others || {}) }} />
    </i>
  )
}

declare type SvgIcons = {
  [name: string]: SvgComponent
}

declare type SvgComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string
  }
>
