type UserInfo = {
  name: string
  email: string
  avatar?: string
  intro?: string
}

type PictureProps = {
  url?: string
  alt?: string
  className?: MoudleClassName
  style?: any
  radius?: numstr
  height?: numstr
  width?: numstr
  fit?: 'cover' | 'contain' | 'fill'
  useImg?: boolean
}

type logTag = string

type MoudleClassName = string | undefined

type numstr = number | string
