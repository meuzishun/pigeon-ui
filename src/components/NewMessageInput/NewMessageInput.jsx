import { useRef, useEffect } from 'react';
import useMessages from '../../hooks/useMessages';
import useDashboard from '../../hooks/useDashboard';
import useNewMessage from '../../hooks/useNewMessage';
import { BsSendFill } from 'react-icons/bs';
import styles from './NewMessageInput.module.scss';

function NewMessageInput() {
  const inputRef = useRef(null);
  const { sendNewMsg } = useMessages();
  const { isAnimating, viewConversation, selectedId, setSelectedId } =
    useDashboard();
  const { newMessage, editNewMsgContent } = useNewMessage();

  const handleInput = (e) => {
    editNewMsgContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editNewMsgContent('');
    const res = await sendNewMsg(newMessage);
    if (!selectedId) {
      setSelectedId(res.message._id);
    }
  };

  useEffect(() => {
    if (
      !isAnimating &&
      viewConversation &&
      newMessage.participants.length > 1
    ) {
      inputRef.current.focus();
    }
  }, [isAnimating, viewConversation]);

  return (
    <form className={styles['new-msg-input']} onSubmit={handleSubmit}>
      <input
        value={newMessage?.content}
        onChange={handleInput}
        type='text'
        ref={inputRef}
      />
      <button type='submit'>
        <BsSendFill />
      </button>
    </form>
  );
}

export default NewMessageInput;
