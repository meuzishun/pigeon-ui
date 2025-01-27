import useMessages from '../../hooks/useMessages';
import useDashboard from '../../hooks/useDashboard';
import Message from '../../components/Message/Message';
import AlwaysScrollToBottom from '../../components/AlwaysScrollToBottom/AlwaysScrollToBottom';
import styles from './MessagesContainer.module.scss';

function MessagesContainer() {
  const { conversations } = useMessages();
  const { selectedId } = useDashboard();

  const conversation = conversations.find(
    (conversation) => conversation[0]._id === selectedId
  );

  return (
    <div className={styles['messages-container']}>
      {conversation?.length > 0
        ? conversation.map((message) => (
            <Message key={message._id} message={message} />
          ))
        : null}
      <AlwaysScrollToBottom />
    </div>
  );
}

export default MessagesContainer;
