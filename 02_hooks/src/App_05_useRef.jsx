import React from 'react'

const App = () => {
    // const [comentarios, setComentarios] = React.useState([]);
    // const [input, setInput] = React.useState('')
    // const inputElement = React.useRef();

    // function handleClick() {
    //     setComentarios([...comentarios, input])
    //     setInput('')
    //     inputElement.current.focus();
    // }

    const [carrinho, setCarrinho] = React.useState(0)
    const [notificacao, setNotificacao] = React.useState(null)
    const timeOutRef = React.useRef()

    function handleClick(){
        setCarrinho(carrinho + 1)
        setNotificacao('Item adicionado ao carrinho')

        clearTimeout(timeOutRef.current)
        timeOutRef.current = setTimeout(() => {
            setNotificacao(null)
        }, 2000)
    }

  return (
    <div>
        {/* <ul>
            {comentarios.map((comentario) => (
                <li key={comentario}>{comentario}</li>
            ))}
            <input 
                type="text" 
                value={input}
                ref={inputElement}
                onChange={({target}) => setInput(target.value)} 
            />

            <br />
            <button onClick={handleClick}>Enviar</button>
        </ul> */}

        <p>{notificacao}</p>
        <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  )
}

export default App