// Global imports
import React from 'react'
import { compose } from 'ramda'
import { inject, observer } from 'mobx-react'

// Local imports
import CustomButton from '../styled-components'
import modelOf from '../utils'
import MainStore from '../stores/MainStore'

const Toolbar = ({ rootTree }) => {
  const [color, setColor] = React.useState('#ffffff')

  return (
    <div className='toolbar'>
      <CustomButton onClick={() => rootTree.addBox()}>Add Box</CustomButton>
      <CustomButton onClick={() => rootTree.removeBox()}>
        Remove Box
      </CustomButton>
      <input
        type='color'
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <CustomButton onClick={() => rootTree.onChangeSelectedBoxesColor(color)}>
        Change box color
      </CustomButton>
      <span>
        Nº selected boxes:
        {rootTree.selectedBoxes.length}
      </span>
    </div>
  )
}

Toolbar.propTypes = {
  rootTree: modelOf(MainStore).isRequired,
}

export default compose(inject('rootTree'), observer)(Toolbar)
