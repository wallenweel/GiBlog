import React from 'react'
import { render } from '@testing-library/react'
import Main from './'

test('renders children nodes', () => {
  const { getByText } = render(
    <Main>
      <div>children</div>
    </Main>
  )
  const childrenNode = getByText(/children/i)
  expect(childrenNode).toBeInTheDocument()
})
