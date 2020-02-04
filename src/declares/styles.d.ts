declare module '*.css'

declare type MoudleClassName = string | undefined

declare module '*.module.scss' {
  export const container: MoudleClassName;
  export const wrap: MoudleClassName;
}