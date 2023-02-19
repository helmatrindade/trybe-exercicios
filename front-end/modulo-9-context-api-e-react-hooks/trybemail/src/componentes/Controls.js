import PropTypes from 'prop-types';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function Controls({ marcaTodosLido, marcaTodosNaoLido }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ marcaTodosLido }>
          <img src={ readIcon } alt="" />
          Marcar todas como lida
        </button>

        <button
        type="button"
        onClick={ marcaTodosNaoLido }>
          <img src={ unreadIcon } alt="" />
          Marcar todas como não lida
        </button>
    </div>
  );
}

Controls.propTypes = {
  marcaTodosLido: PropTypes.func.isRequired,
  marcaTodosNaoLido: PropTypes.func.isRequired,
};

export default Controls;
