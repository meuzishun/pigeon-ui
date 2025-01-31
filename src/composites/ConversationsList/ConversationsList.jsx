import { useRef } from 'react';
import useMessages from '../../hooks/useMessages';
import FadeTransition from '../../components/FadeTransition/FadeTransition';
import LoadingMsg from '../../components/LoadingMsg/LoadingMsg';
import ConversationPreview from '../ConversationPreview/ConversationPreview';
import styles from './ConversationsList.module.scss';

function ConversationsList() {
  const loadingRef = useRef(null);
  const conversationsRef = useRef(null);
  const { conversations, isLoading } = useMessages();
  const nodeRef = isLoading ? loadingRef : conversationsRef;

  return (
    <FadeTransition parentKey={isLoading} nodeRef={nodeRef} styles={styles}>
      {isLoading ? (
        <div ref={loadingRef}>
          <LoadingMsg text='Loading...' />
        </div>
      ) : (
        <div className={styles['conversations-list']} ref={conversationsRef}>
          {conversations?.length < 1 ? (
            <div>
              <p className={styles['msg']}>No messages</p>
            </div>
          ) : (
            conversations?.map((conversation) => (
              <ConversationPreview
                key={conversation[0]._id}
                conversation={conversation}
              />
            ))
          )}
        </div>
      )}
    </FadeTransition>
  );
}

export default ConversationsList;
