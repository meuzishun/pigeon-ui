import { useRef } from 'react';
import useFriends from '../../hooks/useFriends';
import FadeTransition from '../../components/FadeTransition/FadeTransition';
import LoadingMsg from '../../components/LoadingMsg/LoadingMsg';
import Friend from '../../components/Friend/Friend';
import styles from './FriendsList.module.scss';

function FriendsList() {
  const loadingRef = useRef(null);
  const friendsRef = useRef(null);
  const { friends, isLoading } = useFriends();
  const nodeRef = isLoading ? loadingRef : friendsRef;

  return (
    <FadeTransition parentKey={isLoading} nodeRef={nodeRef} styles={styles}>
      {isLoading ? (
        <div ref={loadingRef}>
          <LoadingMsg />
        </div>
      ) : (
        <div className={styles['friends-list']} ref={friendsRef}>
          {friends?.length < 1 ? (
            <div>
              <p className={styles['no-friends']}>You have no friends</p>
            </div>
          ) : (
            friends?.map((friend) => (
              <Friend friend={friend} key={friend._id} />
            ))
          )}
        </div>
      )}
    </FadeTransition>
  );
}

export default FriendsList;
