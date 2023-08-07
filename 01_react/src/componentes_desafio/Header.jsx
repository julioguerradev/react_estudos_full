import React from 'react'

const Header = ({children}) => {
  return (
    <>
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./Produtos">Produtos</a></li>
        </ul>
        <h1 style={{ color: 'green' }}>{children}</h1>
    </>
  )
}

export default Header