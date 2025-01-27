import useDashboard from '../../hooks/useDashboard';
import ConversationHeader from '../../composites/ConversationHeader/ConversationHeader';
import MessagesContainer from '../../composites/MessagesContainer/MessagesContainer';
import NewMessageInput from '../../components/NewMessageInput/NewMessageInput';
import { formatClassNames } from '../../lib/formatClassNames';
import styles from './Conversation.module.scss';

function Conversation() {
  const { viewConversation, handleTransitionEnd } = useDashboard();

  const classNames = ['conversation'];

  if (!viewConversation) {
    classNames.push('hide');
  }

  return (
    <div
      className={formatClassNames(styles, classNames)}
      onTransitionEnd={handleTransitionEnd}
    >
      {viewConversation ? (
        <>
          <ConversationHeader />
          <MessagesContainer />
          <NewMessageInput focus={focus} />
        </>
      ) : (
        <p className={styles['no-msg']}>No message selected</p>
      )}
    </div>
  );
}

export default Conversation;
