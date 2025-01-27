import PropTypes from 'prop-types';
import useNewMessage from '../../hooks/useNewMessage';
import { BsXCircleFill } from 'react-icons/bs';
import styles from './Participant.module.scss';

function Participant({ participant }) {
  const {
    newMessage: { parentId },
    removeNewMsgParticipant,
  } = useNewMessage();

  const handleRemoveClick = () => {
    removeNewMsgParticipant(participant);
  };

  return (
    <div className={styles['participant']}>
      <p className={styles['name']}>
        {participant.firstName} {participant.lastName}
      </p>

      {!parentId ? (
        <div className={styles['icon']} onClick={handleRemoveClick}>
          <BsXCircleFill />
        </div>
      ) : null}
    </div>
  );
}

Participant.propTypes = {
  participant: PropTypes.object,
};

export default Participant;
