import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';
import { getToken } from '../services/localStorage.js';
import { searchUsersWithTokenAndStr } from '../services/authAPI.js';

const LOAD = 'LOAD';
const INITIALIZE = 'INITIALIZE';
const ERROR = 'ERROR';

const initialUsersState = {
  isLoading: false,
  error: null,
  userSearchResults: [],
};

const userSearchReducer = (state, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        isLoading: true,
      };

    case INITIALIZE:
      return {
        ...state,
        isLoading: false,
        userSearchResults: action.payload.users,
      };

    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

const UserSearchContext = createContext(null);

function UserSearchProvider({ children }) {
  const [state, dispatch] = useReducer(userSearchReducer, initialUsersState);

  const searchUsers = async (str) => {
    if (str.length === 0) {
      dispatch({
        type: INITIALIZE,
        payload: {
          users: [],
        },
      });
      return;
    }

    dispatch({
      type: LOAD,
    });
    const token = getToken();
    const response = await searchUsersWithTokenAndStr(token, str);
    const data = await response.json();

    dispatch({
      type: INITIALIZE,
      payload: {
        users: data.users,
      },
    });
  };

  return (
    <UserSearchContext.Provider value={{ ...state, searchUsers }}>
      {children}
    </UserSearchContext.Provider>
  );
}

UserSearchProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { UserSearchProvider, UserSearchContext };
