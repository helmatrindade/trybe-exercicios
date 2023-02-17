import PropTypes from 'prop-types';
import { nLido, lido } from '../constantes';

function Lista({mensagens, setMensagensStatus}) {
  return (
    <ul className="messages-list">
      {
        mensagens.map((mensagem) => 
        <li key={ mensagem.id }>
          <p className="message-title">{mensagem.title}</p>
        </li>
        )
      }
    </ul>
  )
}

Lista.propTypes = {
  mensagens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
}


export default Lista;
