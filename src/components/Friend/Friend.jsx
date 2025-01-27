import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useFriends from '../../hooks/useFriends';
import useMessages from '../../hooks/useMessages';
import { BsChatText, BsFillPersonXFill } from 'react-icons/bs';
import styles from './Friend.module.scss';

function Friend({ friend }) {
  const { removeFriend } = useFriends();
  const { createNewMsg, addNewMsgParticipant } = useMessages();
  const navigate = useNavigate();

  const handleRemoveBtnClick = () => {
    removeFriend(friend._id);
  };

  const handleMessageBtnClick = () => {
    createNewMsg();
    addNewMsgParticipant(friend);
    navigate('/messages');
  };

  return (
    <div className={styles['friend']}>
      <p key={friend._id} className={styles['friend-name']}>
        {friend.firstName} {friend.lastName}{' '}
        <span className={styles['email']}>{friend.email}</span>
      </p>
      <button className={styles['message-btn']} onClick={handleMessageBtnClick}>
        <BsChatText />
      </button>
      <button className={styles['remove-btn']} onClick={handleRemoveBtnClick}>
        <BsFillPersonXFill />
      </button>
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.object,
};

export default Friend;
