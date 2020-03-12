import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import BoxDraggable from './BoxDraggable'

const Box = props => {
  const { id, height, width, left, top, color, box, selected } = props

  return (
    <BoxDraggable
      id={id}
      top={top}
      left={left}
      width={width}
      height={height}
      selected={selected}
      color={color}
      box={box}
    >
      <div>Box</div>
    </BoxDraggable>
  )
}

Box.propTypes = {
  id: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  box: PropTypes.shape().isRequired,
}

export default observer(Box)
