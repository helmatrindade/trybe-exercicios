import PropTypes from 'prop-types';
import { NLIDO, LIDO } from '../constantes';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';


function Lista({mensagens, setMensagensStatus}) {
  return (
    <ul className="messages-list">
      {mensagens.map((mensagem) => {
        const messageClass = mensagem.status === LIDO ? 'message-read': 'message-unread';

        return (
        <li key={ mensagem.id }>
          <p className={`message-title ${messageClass}`}>{mensagem.title}</p>
          <div>
            <button
            type="button"
            title="marcar como lida"
            onClick={ () => setMensagensStatus(mensagem.id, LIDO) }>
              <img src={ readIcon } alt=""/>
              </button>
              <button
            type="button"
            title="marcar como não lida"
            onClick={ () => setMensagensStatus(mensagem.id, NLIDO) }>
              <img src={ unreadIcon } alt=""/>
              </button>
          </div>
        </li>
        );
      })}
    </ul>
  );
}

Lista.propTypes = {
  mensagens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMensagensStatus: PropTypes.func.isRequired,
};


export default Lista;
