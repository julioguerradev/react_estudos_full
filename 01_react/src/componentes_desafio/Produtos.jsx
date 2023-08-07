import React from 'react'
import Header from "./Header"

const Produtos = ({produtos, children}) => {

  return (
    <>
      <Header>{children}</Header>
      {
        produtos
        .map(({nome, propriedades}) => (
          <div key={nome} style={{ border: '1px solid #000', margin: '1rem 0', padding: '1rem' }}>
            <p>{nome}</p>
            <ul>
              {propriedades.map(propriedade => <li key={propriedade}>{propriedade}</li>)}
            </ul>
          </div>
        ))
      }
    </>
  )
}

export default Produtos