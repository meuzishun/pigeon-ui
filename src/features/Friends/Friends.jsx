import { NavLink } from 'react-router-dom';
import FriendsList from '../../containers/FriendsList/FriendsList';
import styles from './Friends.module.scss';

function Friends() {
  return (
    <div className={styles['friends']}>
      <NavLink to={'/search'}>find friend</NavLink>
      <FriendsList />
    </div>
  );
}

export default Friends;
