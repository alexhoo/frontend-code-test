import MainStore from './MainStore'

const configureRootStore = () => {
  const rootStore = MainStore.create()

  return { rootStore }
}

export default configureRootStore
