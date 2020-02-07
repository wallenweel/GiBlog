import { env, isProduction, app, theme, canLogInProduction } from '../variables'

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
