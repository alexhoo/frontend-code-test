import { types, getParent } from 'mobx-state-tree'

const BoxModel = types
  .model('Box', {
    id: types.identifier,
    width: 200,
    height: 100,
    color: '#FFF000',
    left: 200,
    top: 100,
    selected: false,
  })
  .views(self => ({
    getLeft() {
      return self.left
    },
    getTop() {
      return self.top
    },
    getIsSelected() {
      return self.selected
    },
  }))
  .actions(self => ({
    updateColor(color) {
      self.color = color
    },
    updateLeft(left) {
      self.left = left
    },
    updateTop(top) {
      self.top = top
    },
    updateSelected() {
      getParent(self, 2).onSelectBox(self)
      self.selected = !self.selected
    },
  }))

export default BoxModel
