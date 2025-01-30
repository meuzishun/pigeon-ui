import useDashboard from '../../hooks/useDashboard';
import useNewMessage from '../../hooks/useNewMessage';
import { formatClassNames } from '../../lib/formatClassNames';
import RoomsList from '../../composites/RoomsList/RoomsList';
import styles from './RoomsContainer.module.scss';

function RoomsContainer() {
  const { setSelectedId, viewConversation } = useDashboard();
  const { createNewMsg } = useNewMessage();

  const handleNewMsgBtnClick = () => {
    setSelectedId(null);
    createNewMsg();
  };

  const classNames = ['rooms-container'];

  if (viewConversation) {
    classNames.push('hide');
  }

  return (
    <div className={formatClassNames(styles, classNames)}>
      <button className={styles['new-msg-btn']} onClick={handleNewMsgBtnClick}>
        new message
      </button>
      <RoomsList />
    </div>
  );
}

export default RoomsContainer;
