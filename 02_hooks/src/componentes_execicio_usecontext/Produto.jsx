import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if(global.dados === null) return null

  return (
    <div>Produto: {
      global.dados.map((produtos => <li key={produtos.id}>{produtos.nome }</li>))
      }
    </div>
  )
}

export default Produto