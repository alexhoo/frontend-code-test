import { types, applySnapshot } from 'mobx-state-tree'
import uuid from 'uuid/v4'
import BoxModel from './models/Box'
import getRandomColor from '../utils/getRandomColor'
import { toggleEltoInList } from '../utils'

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
        })

        // self.boxes.push(box)
        applySnapshot(self, {
          selectedBoxes: [...self.selectedBoxes],
          boxes: [...self.boxes, box],
        })
      },
      removeBox() {
        self.boxes.splice(self.boxes.length - 1, 1)
      },
      onSelectBox(box) {
        self.selectedBoxes = toggleEltoInList(box, self.selectedBoxes)
      },
      onChangeSelectedBoxesColor(color) {
        self.selectedBoxes.forEach(box => box.updateColor(color))
      },
    }
  })
  .views(self => ({
    getSelectedBox(id) {
      return self.selectedBoxes.find(x => x.id === id)
    },
    getSelectedBoxes() {
      return self.selectedBoxes
    },
  }))

export default MainStore
