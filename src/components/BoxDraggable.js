// Global Imports
import React from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
// Local Imports
import useInteract from '../hooks/useInteract'
import modelOf from '../utils'
import BoxModel from '../stores/models/Box'
import { CustomBox } from '../styled-components'

const BoxDraggable = props => {
  const { id, color, width, height, left, top, selected, box, children } = props
  const { ref, initiate, style } = useInteract({
    x: left,
    y: top,
    elto: box,
  })
  React.useEffect(() => {
    initiate()
  })

  return (
    <CustomBox
      id={id}
      ref={ref}
      className={`${selected ? 'multiple' : ''}`}
      style={{
        ...style,
        backgroundColor: color,
        width,
        height,
        border: selected ? '5px dashed pink' : '5px solid transparent',
      }}
    >
      {children}
    </CustomBox>
  )
}

BoxDraggable.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  box: modelOf(BoxModel).isRequired,
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default observer(BoxDraggable)
