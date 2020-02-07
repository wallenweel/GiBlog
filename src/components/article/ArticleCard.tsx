import React from 'react'

import Card from '../common/Card'

import { wrap } from './ArticleCard.module.css'

export default function ArticleCard() {
  return (
    <Card className={wrap}>
      <h6>This is title</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        reiciendis asperiores consequatur reprehenderit dolor voluptas
        exercitationem ducimus quos nihil iste! Culpa ea deleniti rem tempora
        minus nemo praesentium dignissimos expedita.
      </p>
    </Card>
  )
}
