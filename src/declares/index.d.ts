type UserInfo = {
  name: string
  email: string
  avatar?: string
  intro?: string
}

type PictureProps = {
  url?: string
  alt?: string
  className?: string
  style?: any
  radius?: numstr
  height?: numstr
  width?: numstr
  fit?: 'cover' | 'contain' | 'fill'
  useImg?: boolean
}

type numstr = number | string
