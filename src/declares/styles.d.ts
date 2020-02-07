module '*.css'

module '*.module.css' {
  export const container: MoudleClassName
  export const wrap: MoudleClassName
}

type MoudleClassName = string | undefined
