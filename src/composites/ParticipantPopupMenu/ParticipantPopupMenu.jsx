import useNewMessage from '../../hooks/useNewMessage';
import useFriends from '../../hooks/useFriends';
import AddSingleParticipant from '../../components/AddSingleParticipant/AddSingleParticipant';
import LoadingMsg from '../../components/LoadingMsg/LoadingMsg';
import styles from './ParticipantPopupMenu.module.scss';

function ParticipantPopupMenu() {
  const { newMessage } = useNewMessage();
  const { friends, isLoading } = useFriends();

  const participantIds = newMessage.participants.map(
    (participant) => participant._id
  );

  return (
    <div className={styles['popup-menu']}>
      {isLoading ? (
        <LoadingMsg text={'Loading...'} showIcon={false} />
      ) : (
        friends.length > 0 &&
        friends.reduce((results, friend) => {
          if (!participantIds.includes(friend._id)) {
            results.push(
              <AddSingleParticipant participant={friend} key={friend._id} />
            );
          }
          return results;
        }, [])
      )}
    </div>
  );
}

export default ParticipantPopupMenu;
