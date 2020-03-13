import { types, applySnapshot } from 'mobx-state-tree'
import uuid from 'uuid/v4'
import BoxModel from './models/Box'
import getRandomColor from '../utils/getRandomColor'

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
    selectedBoxes: types.array(
      types.safeReference(BoxModel, { acceptsUndefined: false })
    ),
  })
  .actions(self => {
    return {
      addBox() {
        const box = BoxModel.create({
          id: uuid(),
          color: getRandomColor(),
          left: Math.ceil(Math.random() * 1200),
          top: Math.ceil(Math.random() * 675),
          selected: false,
        })

        applySnapshot(self, {
          selectedBoxes: [...self.selectedBoxes],
          boxes: [...self.boxes, box],
        })
      },
      removeBox() {
        self.boxes.splice(self.boxes.length - 1, 1)
      },
      onChangeSelectedBoxesColor(color) {
        self.boxes.forEach(box =>
          box.selected ? box.updateColor(color) : null
        )
      },
    }
  })
  .views(self => ({
    getBoxById(id) {
      return self.boxes.find(x => x.id === id)
    },
    getSelectedBoxes() {
      return self.boxes.filter(x => x.selected === true)
    },
  }))

export default MainStore
