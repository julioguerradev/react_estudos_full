import React from "react"
import ButtonModal from "./componentes_aula/ButtonModal";
import Modal from "./componentes_aula/Modal";

const App = () => {
  // const [ativo, setAtivo] = React.useState(true);
  // const [dados, setDados] = React.useState({nome: 'Júlio', idade: '22'})
  const [items, setItems] = React.useState('Teste')

  // Modal
  const [modal, setModal] = React.useState(false);


  // function handleClick(){
  //   setAtivo(!ativo)
  //   setDados({...dados, faculdade: 'Possui faculdade'})
  // }

  function handleClick(){
    setItems('Outro')
  }

  return (
    <div>
      {/* <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button> */}
      <div>
        <button onClick={handleClick}>Clicar</button>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>
    </div>
  );
};


export default App
