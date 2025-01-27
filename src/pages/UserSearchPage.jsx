import { UserSearchProvider } from '../contexts/UserSearchContext';
import UserSearch from '../features/UserSearch/UserSearch';

function UserSearchPage() {
  return (
    <UserSearchProvider>
      <UserSearch />
    </UserSearchProvider>
  );
}

export default UserSearchPage;
