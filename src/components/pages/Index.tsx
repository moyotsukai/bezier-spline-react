import React from 'react'
import Bezier from '../../Bezier'
import Example from '../works/Example'
import WhippedCream from '../works/WhippedCream'

const HomePage: React.FC = () => {
  return (
    <Bezier.Root>
      <Example />
      {/* <WhippedCream /> */}
    </Bezier.Root>
  )
}

export default HomePage