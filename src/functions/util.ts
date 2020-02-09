import { env, isProduction, app, theme, canLogInProduction } from '../variables'
import { ReactElement } from 'react'

export const gettype = (target: any): string =>
  Object.prototype.toString.call(target)

export const istype = (target: any, type: string): boolean =>
  gettype(target) === type

export const log = (tag: logTag, ...anything: any): void => {
  // filter tags to show in production
  if (isProduction && !canLogInProduction.includes(tag)) return

  const style = `
    font-family: sans-serif;
    line-height: 1.25;
  `
  const styleTag = [
    `%c  ${app.name}  %c  ${env}  %c  ${tag}`,
    `${style}
    border-radius: 3px 0 0 3px;
    background-color: ${theme.color.primary};
    color: #f7f7f7;
    `,
    `${style}
    border-radius: 0 3px 3px 0;
    background-color: #505050;
    color: #9f9f9f;
    `,
    `${style}
    text-transform: uppercase;
    `
  ]

  // eslint-disable-next-line no-console
  console.log(...styleTag, ...anything)
}

export const classNames = (...names: (string | undefined)[]): string =>
  names.join(' ').trim()

export const subExcerpt = (excerpt: string, length: number = 50): string =>
  excerpt.length > length ? `${excerpt.substr(0, length)}...` : excerpt

export const slots = (
  children?: ReactElement[]
): { [slot: string]: ReactElement[] } => {
  const slots: { [slot: string]: ReactElement[] } = {}

  if (children) {
    const items = (istype(children, 'array') ? children : [children]) as []

    items.reduce((p, c: ReactElement) => {
      if (typeof c === 'object' && c) {
        if (c.props && typeof c.props === 'object') {
          const slot: string = c.props['data-slot'] || 'defaults'
          p[slot] = (p[slot] || (p[slot] = [])).concat(c)
        }
      }
      return p
    }, slots)
  }

  return slots
}
