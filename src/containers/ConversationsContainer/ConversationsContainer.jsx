import useDashboard from '../../hooks/useDashboard';
import useNewMessage from '../../hooks/useNewMessage';
import { formatClassNames } from '../../lib/formatClassNames';
import ConversationsList from '../../composites/ConversationsList/ConversationsList';
import styles from './ConversationsContainer.module.scss';

function ConversationsContainer() {
  const { setSelectedId, viewConversation } = useDashboard();
  const { createNewMsg } = useNewMessage();

  const handleNewMsgBtnClick = () => {
    setSelectedId(null);
    createNewMsg();
  };

  const classNames = ['conversations-container'];

  if (viewConversation) {
    classNames.push('hide');
  }

  return (
    <div className={formatClassNames(styles, classNames)}>
      <button className={styles['new-msg-btn']} onClick={handleNewMsgBtnClick}>
        new message
      </button>
      <ConversationsList />
    </div>
  );
}

export default ConversationsContainer;
