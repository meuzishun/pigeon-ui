import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { SOCKET_URL } from '../constants/url';
import { io } from 'socket.io-client';
import { getToken } from '../services/localStorage';
import {
  getMessagesWithToken,
  postMessageWithTokenAndData,
} from '../services/api';
import { nestMessages } from '../lib/nestMessages';

const socket = io(SOCKET_URL);

const MessagesContext = createContext(null);

function MessagesProvider({ children }) {
  const LOAD = 'LOAD';
  const INITIALIZE = 'INITIALIZE';
  const ADD_MESSAGE = 'ADD_MESSAGE';

  const initialMessagesState = {
    isInitialized: false,
    isLoading: false,
    messages: null,
    conversations: null,
  };

  const messagesReducer = (state, action) => {
    switch (action.type) {
      case LOAD:
        return {
          ...state,
          isLoading: true,
        };

      case INITIALIZE:
        return {
          ...state,
          isInitialized: true,
          isLoading: false,
          messages: action.payload.messages,
          conversations: nestMessages(action.payload.messages),
        };

      case ADD_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload],
          conversations: nestMessages([...state.messages, action.payload]),
        };

      default:
        return state;
    }
  };

  const [messagesState, dispatch] = useReducer(
    messagesReducer,
    initialMessagesState
  );

  const getMessages = async () => {
    dispatch({ type: LOAD });

    try {
      const token = getToken();
      const response = await getMessagesWithToken(token);
      const data = await response.json();

      dispatch({
        type: INITIALIZE,
        payload: {
          messages: data.messages,
        },
      });
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendNewMsg = async (message) => {
    try {
      const token = getToken();
      const postResponse = await postMessageWithTokenAndData(token, message);
      const postData = await postResponse.json();

      socket.emit('sendMessage', postData.message);

      dispatch({
        type: ADD_MESSAGE,
        payload: postData.message,
      });

      return postData;
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    getMessages();

    socket.on('newMessage', (newMessage) => {
      //! Still receiving all messages regardless of author and participants
      // console.log(newMessage);
      dispatch({
        type: ADD_MESSAGE,
        payload: newMessage,
      });
    });

    socket.on('connect', () => {
      getMessages();
    });

    return () => {
      socket.off('newMessage');
      socket.off('connect');
    };
  }, []);

  return (
    <MessagesContext.Provider
      value={{
        ...messagesState,
        sendNewMsg,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

MessagesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { MessagesProvider, MessagesContext };
