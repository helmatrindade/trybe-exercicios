import { useEffect, useState } from 'react';
import './App.css';
import listaMensagem  from './data/listaMensagem';
import { LIDO, NLIDO }  from './constantes';
import Controls from './componentes/Controls';
import Lista from './componentes/Lista';

function App() {
  const [mensagens, setMensagens] = useState(listaMensagem);

  useEffect(() => {
    const todasMenssagensLidas = mensagens.every(({ status }) => status
     === LIDO);

     if (todasMenssagensLidas) {
      alert('Parabéns! você leu todas suas mensagens!');
     }
  }, [mensagens])

  // Função setMesagens altera o status de um email.
  const setMensagensStatus = (messagesId, newStatus) => {
    const updatedMessages = mensagens.map((mensagemAtual) => {
      if (mensagemAtual.id === messagesId ) {
        return { ...mensagemAtual, status: newStatus };
      }
      return mensagemAtual;
    });

    setMensagens(updatedMessages);
  }

  const marcaTodosLido = () => {
    const todosLido = mensagens.map((m) => ({ ...m, status: LIDO }));
    setMensagens(todosLido);
  };

  const marcaTodosNaoLido = () => {
    const todosNLido = mensagens.map((m) => ({ ...m, status: NLIDO }));
    setMensagens(todosNLido)
  };

  return (
    <div className="App">
     <header>
      <h1>TrybeMail</h1>
     </header>
     <Controls
      marcaTodosLido={ marcaTodosLido } 
      marcaTodosNaoLido={ marcaTodosNaoLido }
      />
      <Lista 
      mensagens={ mensagens }
      setMensagensStatus={ setMensagensStatus } />
    </div>
  );
}

export default App;
