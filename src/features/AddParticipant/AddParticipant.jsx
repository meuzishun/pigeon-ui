import { useState, useRef } from 'react';
import useNewMessage from '../../hooks/useNewMessage';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { BsPlusCircle } from 'react-icons/bs';
import ParticipantPopupMenu from '../../composites/ParticipantPopupMenu/ParticipantPopupMenu';
import styles from './AddParticipant.module.scss';

function AddParticipant() {
  const { newMessage } = useNewMessage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef(null);

  const handleAddClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = () => {
    setIsMenuOpen(false);
  };

  useOnClickOutside(container, handleOutsideClick);

  if (newMessage?.parentId) {
    return null;
  }

  return (
    <div className={styles['add-participant']} ref={container}>
      <div className={styles['add-icon']} onClick={handleAddClick}>
        <BsPlusCircle />
      </div>
      {isMenuOpen && <ParticipantPopupMenu />}
    </div>
  );
}

export default AddParticipant;
