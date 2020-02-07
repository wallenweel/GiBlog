import React, { CSSProperties } from 'react'

import styles, { wrap } from './Picture.module.css'

export default function Picture({
  url,
  alt,
  className,
  style,
  radius,
  height,
  width,
  fit = 'cover',
  useImg = false
}: PictureProps) {
  const styleObject: CSSProperties = {
    borderRadius: `${radius}rem`,
    backgroundImage: `url(${url})`,
    backgroundSize: fit,
    height: `${height}rem`,
    width: `${width}rem`,

    ...(style as CSSProperties)
  }

  if (!url || useImg) delete styleObject.backgroundImage
  if (!radius) delete styleObject.borderRadius
  if (!height) delete styleObject.height
  if (!width) delete styleObject.width

  return (
    <div
      className={[wrap, className].join(className ? ' ' : '')}
      style={styleObject}
    >
      {useImg ? (
        <img
          className={styles.image}
          style={{ objectFit: fit } as CSSProperties}
          src={url}
          alt={alt}
        />
      ) : null}
    </div>
  )
}
