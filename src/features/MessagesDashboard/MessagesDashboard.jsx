import ConversationsContainer from '../../containers/ConversationsContainer/ConversationsContainer';
import Conversation from '../../containers/Conversation/Conversation';
import styles from './MessagesDashboard.module.scss';

function MessagesDashboard() {
  return (
    <div className={styles['messages-dashboard']}>
      <ConversationsContainer />
      <Conversation />
    </div>
  );
}

export default MessagesDashboard;
