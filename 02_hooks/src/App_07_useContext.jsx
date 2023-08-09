import React from 'react'
import Produto from './componentes_usecontext/Produto'
import { GlobalStorage } from './componentes_usecontext/GlobalContext'

const App = () => {

  return (
    <GlobalStorage>
        <Produto/>
    </GlobalStorage>
  )
}

export default App