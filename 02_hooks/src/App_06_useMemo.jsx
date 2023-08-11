import React from 'react'

const App = () => {
    const [contar, setContar] = React.useState(0);
    function operacaoLenta() {
        let c;
        for (let i = 0 ; i < 100000000; i++){
            c = i + i / 10
        }
        return c
    }

    // const valor = React.useMemo(() => {
    //     const localItem = window.localStorage.getItem('produto');
    //     console.log('aconteceu o memo')
    //     return localItem;
    // }, [])

    // const t1 = performance.now()
    // const valor = React.useMemo(() => operacaoLenta(), [])
    // console.log(valor)
    // console.log(performance.now() - t1)

  return (
    <button onClick={() => {setContar(contar + 1)}}>{contar}</button>
  )
}

export default App