import { ReactElement } from 'react'
import { env, isProduction, app, theme, canLogInProduction } from '../variables'

export const gettype = (target: any): string =>
  Object.prototype.toString
    .call(target)
    .match(/\[object (.+)\]/)![1]
    .toLowerCase()

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

type slots = { [slot: string]: ReactElement[] }
export const slots = (
  children?: ReactElement[],
  defaults: ReactElement[] = []
): slots => {
  if (!children) return { defaults }

  return ((istype(children, 'array') ? children : [children]) as []).reduce(
    (p: slots, c: ReactElement) => {
      if (typeof c === 'object' && c) {
        if (c.props && typeof c.props === 'object') {
          const slot: string = c.props['data-slot'] || 'defaults'
          return { ...p, [slot]: (p[slot] || []).concat(c) }
        }
      }

      return p
    },
    { defaults }
  )
}
