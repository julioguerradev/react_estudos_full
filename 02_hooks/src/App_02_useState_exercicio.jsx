import React from 'react'
import Produto from './componentes_exercicio_usestate/Produto'

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true)

    const produto = event.target.innerText.toLowerCase();
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
    const resposneJson = await response.json();

    setDados(resposneJson);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Notebook</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Smartphone</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}></Produto>}
    </div>
  )
}

export default App
