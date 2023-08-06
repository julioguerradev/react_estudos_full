import React from "react";
import Footer from "./componentes_aulas/Footer";
import Header from "./componentes_aulas/Header";
import Form from "./componentes_aulas/Form";

const App = () => {

  const Titulo = ({cor, texto, children, ...props}) => {
    return <h1 style={{ backgroundColor: cor }} {...props}>{texto}, {children}</h1>
  }

  return (
    <>
      <Header/>
      <Titulo cor="red" texto="Meu título 1">
        Este é o Children
      </Titulo>
      <Titulo cor="blue" texto="Meu título 2"/>
      <Form/>
      <Footer/>
    </>
    )
};


export default App
