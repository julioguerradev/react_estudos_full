import React from 'react'

const App = () => {
    const [contar, setContar] = React.useState(0)

    // Parâmetros:
    // Função a ser executada;
    // Array de dependências
    // "Especial" (Adicione um return, será executada no final da vida do seu componente)
    React.useEffect(() => {
        console.log('Executou')
    }, [])

    React.useEffect(() => {
        document.title = 'Total' + contar
    })

  return (
    <button onClick={() => setContar(contar + 1)}>{contar}</button>
  )
}

export default App