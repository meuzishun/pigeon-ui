import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { getToken } from '../services/localStorage';
import {
  getMessagesWithToken,
  postMessageWithTokenAndData,
} from '../services/api';
import { nestMessages } from '../lib/nestMessages';

const MessagesContext = createContext(null);

function MessagesProvider({ children }) {
  const LOAD = 'LOAD';
  const INITIALIZE = 'INITIALIZE';

  const initialMessagesState = {
    isInitialized: false,
    isLoading: false,
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
          conversations: action.payload.conversations,
        };
    }
  };

  const [messagesState, dispatch] = useReducer(
    messagesReducer,
    initialMessagesState
  );

  const getMessages = async () => {
    dispatch({
      type: LOAD,
    });
    const token = getToken();
    const response = await getMessagesWithToken(token);
    const data = await response.json();

    const conversations = nestMessages(data.messages);

    dispatch({
      type: INITIALIZE,
      payload: {
        conversations: conversations,
      },
    });
  };

  const sendNewMsg = async (message) => {
    const token = getToken();
    const postResponse = await postMessageWithTokenAndData(token, message);
    const postData = await postResponse.json();
    const getResponse = await getMessagesWithToken(token);
    const getData = await getResponse.json();
    const { messages } = getData;

    const conversations = nestMessages(messages);

    dispatch({
      type: INITIALIZE,
      payload: {
        conversations: conversations,
      },
    });

    return postData;
  };

  useEffect(() => {
    getMessages();
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
