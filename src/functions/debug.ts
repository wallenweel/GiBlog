/* eslint-disable no-console */

import { env, isDebug, app, theme } from '../variables'

export default (function debug() {
  const style = `font-family:sans-serif;display:inline-block;line-height:1.25;`
  const tag: any[] = [
    `%c  ${app.name}  %c  ${env}  `,
    `${style}border-radius:3px 0 0 3px;background:${theme.color.primary};color:#f7f7f7;`,
    `${style}border-radius:0 3px 3px 0;background:#505050;color:#9f9f9f;`
  ]

  const bind = (t = 'log' as consoleMethods, enable = true) =>
    enable || isDebug ? console[t].bind(window.console, ...tag) : () => void 0

  return {
    log: bind('log', false),
    warn: bind('warn'),
    error: bind('error'),
    info: bind('info')
  }
})()

type consoleMethods = 'log' | 'warn' | 'error' | 'info'
