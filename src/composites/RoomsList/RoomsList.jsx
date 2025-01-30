import { useRef } from 'react';
import { formatClassNames } from '../../lib/formatClassNames';
import useRooms from '../../hooks/useRooms';
import RoomPreview from '../../components/RoomPreview/RoomPreview';
import styles from './RoomsList.module.scss';
import LoadingMsg from '../../components/LoadingMsg/LoadingMsg';
import FadeTransition from '../../components/FadeTransition/FadeTransition';

function RoomsList() {
  const loadingRef = useRef(null);
  const roomsRef = useRef(null);
  const { rooms, isLoading } = useRooms();
  const nodeRef = isLoading ? loadingRef : roomsRef;
  const classNames = ['rooms-list'];

  return (
    <FadeTransition parentKey={isLoading} nodeRef={nodeRef} styles={styles}>
      {isLoading ? (
        <div ref={loadingRef}>
          <LoadingMsg text='Loading...' />
        </div>
      ) : (
        <div className={formatClassNames(styles, classNames)} ref={roomsRef}>
          {rooms?.length < 1 ? (
            <div>
              <p className={styles['msg']}>No messages</p>
            </div>
          ) : (
            rooms?.map((room) => <RoomPreview key={room._id} room={room} />)
          )}
        </div>
      )}
    </FadeTransition>
  );
}

export default RoomsList;
