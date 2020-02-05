declare module '*.css'

declare type MoudleClassName = string | undefined

declare module '*.module.css' {
  export const container: MoudleClassName;
}
declare module '*.module.scss' {
  export const container: MoudleClassName;
  export const wrap: MoudleClassName;
}