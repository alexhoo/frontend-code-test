// Global imports
import React from 'react'
import { compose } from 'ramda'
import { inject, observer } from 'mobx-react'

// Local Imports
import Box from './Box'
import modelOf from '../utils'
import MainStore from '../stores/MainStore'
import { CanvasContainer } from '../styled-components'

const Canvas = ({ rootTree }) => {
  return (
    <CanvasContainer>
      {rootTree.boxes.map(box => (
        <Box
          id={box.id}
          key={box.id}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          selected={box.selected}
          box={box}
        />
      ))}
    </CanvasContainer>
  )
}
Canvas.propTypes = {
  rootTree: modelOf(MainStore).isRequired,
}

export default compose(inject('rootTree'), observer)(Canvas)
