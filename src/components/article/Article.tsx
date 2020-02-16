import React, { ReactNode } from 'react'

import { container, wrap } from './Article.module.css'
import { classNames } from '../../functions/util'

export default function Article({
  className,
  children
}: {
  className?: MoudleClassName
  children: ReactNode
}) {
  return (
    <section data-ui-article className={classNames(className, container)}>
      <div className={wrap}>
        {children}
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            ipsam vero numquam consequatur earum nihil sapiente, praesentium
            dolores ea aut, accusantium et placeat. Tempora, dolor itaque
            aspernatur libero et animi?
          </p>
        </div>
      </div>
    </section>
  )
}
