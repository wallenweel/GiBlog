import React, { SVGAttributes } from 'react'
import camelCase from 'camelcase'

import * as icons from './icons'

export default function Icon({
  name,
  title,
  ...others
}: {
  name: string
  title?: string
} & SVGAttributes<any>) {
  // TODO: improve here, remove the Svg variable
  const Svg = (icons as SvgIcons)[camelCase(name, { pascalCase: true })]

  return (
    <i data-icon={name}>
      <Svg {...{ title, ...(others || {}) }} />
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
