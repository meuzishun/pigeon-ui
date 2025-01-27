import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { getToken } from '../services/localStorage.js';
import {
  getFriendsWithToken,
  addFriendWithTokenAndId,
  deleteFriendWithTokenAndId,
} from '../services/authAPI.js';

const LOAD = 'LOAD';
const INITIALIZE = 'INITIALIZE';
const ADD = 'ADD';
const REMOVE = 'REMOVE';

const initialFriendsState = {
  isLoading: false,
  isInitialized: false,
  friends: null,
};

const friendsReducer = (state, action) => {
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
        isInitialized: true,
        friends: action.payload.friends,
      };

    case ADD:
      return {
        ...state,
        isLoading: false,
        friends: action.payload.friends,
      };

    case REMOVE:
      return {
        ...state,
        isLoading: false,
        friends: action.payload.friends,
      };

    default:
      return state;
  }
};

const FriendsContext = createContext(null);

function FriendsProvider({ children }) {
  const [friendsState, dispatch] = useReducer(
    friendsReducer,
    initialFriendsState
  );

  const initialize = async () => {
    dispatch({ type: LOAD });

    const token = getToken();
    const response = await getFriendsWithToken(token);
    const data = await response.json();
    const friends = data.contacts;

    dispatch({
      type: INITIALIZE,
      payload: { friends },
    });
  };

  const addFriend = async (id) => {
    const token = getToken();
    const response = await addFriendWithTokenAndId(token, id);
    const data = await response.json();
    const friends = data.contacts;

    dispatch({
      type: ADD,
      payload: { friends },
    });
  };

  const removeFriend = async (id) => {
    const token = getToken();
    const response = await deleteFriendWithTokenAndId(token, id);
    const data = await response.json();
    const friends = data.contacts;

    dispatch({
      type: REMOVE,
      payload: { friends },
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <FriendsContext.Provider
      value={{ ...friendsState, addFriend, removeFriend }}
    >
      {children}
    </FriendsContext.Provider>
  );
}

FriendsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { FriendsProvider, FriendsContext };
