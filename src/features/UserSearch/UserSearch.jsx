import { useState, useEffect } from 'react';
import useUserSearch from '../../hooks/useUserSearch';
import UsersList from '../../containers/UsersList/UsersList';
import styles from './UserSearch.module.scss';

function UserSearch() {
  const [input, setInput] = useState('');
  const { searchUsers } = useUserSearch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    searchUsers(input);
  }, [input]);

  return (
    <div className={styles['user-search']}>
      <input
        type='search'
        value={input}
        onChange={handleInput}
        autoFocus
        placeholder='Search for user...'
      />
      {input.length > 0 ? <UsersList /> : null}
    </div>
  );
}

export default UserSearch;
