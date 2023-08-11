import React, { useEffect } from 'react'
import useLocalStorage from './componentes_custom/useLocalStorage'
import useFetch from './componentes_custom/useFetch'

// Para ser um custom hook deve ser uma função que comece com use
const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '')
    const {request, data, loading, error} = useFetch()

    function handleClick({ target }) {
        setProduto(target, innerText)
    }

    React,useEffect( () => {
      async function fetchData() {
        const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
      }
      fetchData()
    }, [])
    
  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando ...</p>
  if(data)
    return (
      <div>
          <button onClick={handleClick}>notebook</button>
          <button onClick={handleClick}>smartphone</button>

          {data.map((produto) => (
              <div key={produto.id}>
                  <h1>{produto.nome}</h1>
              </div>
          ))}
      </div>
    )
  else return null
}

export default App