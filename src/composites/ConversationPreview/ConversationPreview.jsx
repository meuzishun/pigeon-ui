import PropTypes from 'prop-types';
import useDashboard from '../../hooks/useDashboard';
import useNewMessage from '../../hooks/useNewMessage';
import useAuth from '../../hooks/useAuth';
import { convertHtmlEntitiesToText } from '../../lib/convertHtmlEntitiesToText';
import { convertListToString } from '../../lib/convertListToString';
import { formatTimestamp } from '../../lib/formatTimestamp';
import { formatClassNames } from '../../lib/formatClassNames';
import { getParticipantNames } from '../../lib/getParticipantNames';
import { getParticipants } from '../../lib/getParticipants';
import styles from './ConversationPreview.module.scss';

function ConversationPreview({ conversation }) {
  const { selectedId, setSelectedId } = useDashboard();
  const { user } = useAuth();
  const { createNewMsg, editNewMsgParentId, editNewMsgParticipants } =
    useNewMessage();

  const conversationId = conversation[0]._id;
  const mostRecentMessage = conversation.at(-1);
  const participantsNames = getParticipantNames(conversation, user);
  const isSelected = conversationId === selectedId;
  const classNames = ['conversation-preview'];

  const handleConversationClick = () => {
    createNewMsg();
    editNewMsgParentId(mostRecentMessage._id);
    editNewMsgParticipants(getParticipants(conversation));
    setSelectedId(conversationId);
  };

  if (isSelected) {
    classNames.push('selected');
  }

  return (
    <div
      onClick={handleConversationClick}
      className={formatClassNames(styles, classNames)}
    >
      <p className={styles['author-list']}>
        {convertListToString(participantsNames)}
      </p>
      <p className={styles['timestamp']}>
        {formatTimestamp(mostRecentMessage.timestamp)}
      </p>
      <p className={styles['last-message']}>
        {convertHtmlEntitiesToText(mostRecentMessage.content)}
      </p>
    </div>
  );
}

ConversationPreview.propTypes = {
  conversation: PropTypes.array.isRequired,
};

export default ConversationPreview;
