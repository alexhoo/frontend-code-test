import { onSnapshot } from 'mobx-state-tree'
import MainStore from './MainStore'

const configureRootStore = () => {
  let initialState = {}

  if (localStorage.getItem('mainstore')) {
    initialState = JSON.parse(localStorage.getItem('mainstore'))
  }
  const rootStore = MainStore.create(initialState)

  onSnapshot(rootStore, snapshot => {
    localStorage.setItem('mainstore', JSON.stringify(snapshot))
  })

  return { rootStore }
}

export default configureRootStore
