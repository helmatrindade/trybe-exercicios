import { useState } from 'react';
import './App.css';
import Lista from './componentes/Lista';
import listaMensagem  from './data/listaMensagem';

function App() {
  const [mensagens, setMensagens] = useState(listaMensagem);
  return (
    <div className="App">
     <header>
      <h1>TrybeMail</h1>
     </header>
      <Lista mensagens={ mensagens } />
    </div>
  );
}

export default App;
