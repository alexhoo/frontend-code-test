// Globar Imports
import React from 'react'
import { Provider } from 'mobx-react'
// Local Imports
import configureRootStore from '../stores/configStore'
import { AppWrapper } from '../styled-components'
import Canvas from './Canvas'
import Toolbar from './Toolbar'

function App() {
  const [rootTree, setRootTree] = React.useState(null)

  React.useEffect(() => {
    const { rootStore } = configureRootStore()
    setRootTree(rootStore)
  }, [])

  return rootTree ? (
    <Provider rootTree={rootTree}>
      <AppWrapper>
        <Toolbar />
        <Canvas />
      </AppWrapper>
    </Provider>
  ) : null
}

export default App
