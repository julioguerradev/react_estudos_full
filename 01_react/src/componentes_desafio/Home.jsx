import React from 'react'
import Header from './Header'

const Home = ({children}) => {

  return (
    <>
        <Header>{children}</Header>
        <p>Essa é a Home do site</p>
    </>
  )
}

export default Home