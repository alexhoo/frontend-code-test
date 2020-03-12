import React from 'react'

import { Provider } from 'mobx-react'
import configureRootStore from '../stores/configStore'
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
      <div className='app'>
        <Toolbar />
        <Canvas />
      </div>
    </Provider>
  ) : null
}

export default App
