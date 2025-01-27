import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';
import useAuth from '../hooks/useAuth';

const NewMessageContext = createContext(null);

function NewMessageProvider({ children }) {
  const CREATE_NEW_MSG = 'CREATE_NEW_MSG';
  const EDIT_NEW_MSG_PARENT_ID = 'EDIT_NEW_MSG_PARENT_ID';
  const EDIT_NEW_MSG_CONTENT = 'EDIT_NEW_MSG_CONTENT';
  const EDIT_NEW_MSG_PARTICIPANTS = 'EDIT_NEW_MSG_PARTICIPANTS';
  const ADD_NEW_MSG_PARTICIPANT = 'ADD_NEW_MSG_PARTICIPANT';
  const REMOVE_NEW_MSG_PARTICIPANT = 'REMOVE_NEW_MSG_PARTICIPANT';

  const initialNewMessageState = {
    newMessage: null,
  };

  const newMessageReducer = (state, action) => {
    switch (action.type) {
      case CREATE_NEW_MSG:
        return {
          ...state,
          newMessage: {
            parentId: null,
            participants: [user],
            content: '',
          },
        };

      case EDIT_NEW_MSG_PARENT_ID:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            parentId: action.payload.parentId,
          },
        };

      case EDIT_NEW_MSG_CONTENT:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            content: action.payload.content,
          },
        };

      case EDIT_NEW_MSG_PARTICIPANTS:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            participants: action.payload.participants,
          },
        };

      case ADD_NEW_MSG_PARTICIPANT:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            participants: [
              ...state.newMessage.participants,
              action.payload.participant,
            ],
          },
        };

      case REMOVE_NEW_MSG_PARTICIPANT:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            participants: state.newMessage.participants.filter(
              (participant) =>
                participant._id !== action.payload.participant._id
            ),
          },
        };
    }
  };

  const { user } = useAuth();
  const [newMessageState, dispatch] = useReducer(
    newMessageReducer,
    initialNewMessageState
  );

  const createNewMsg = () => {
    dispatch({
      type: CREATE_NEW_MSG,
    });
  };

  const editNewMsgParentId = (parentId) => {
    dispatch({
      type: EDIT_NEW_MSG_PARENT_ID,
      payload: {
        parentId,
      },
    });
  };

  const editNewMsgContent = (content) => {
    dispatch({
      type: EDIT_NEW_MSG_CONTENT,
      payload: {
        content,
      },
    });
  };

  const editNewMsgParticipants = (participants) => {
    dispatch({
      type: EDIT_NEW_MSG_PARTICIPANTS,
      payload: {
        participants,
      },
    });
  };

  const addNewMsgParticipant = (participant) => {
    dispatch({
      type: ADD_NEW_MSG_PARTICIPANT,
      payload: {
        participant,
      },
    });
  };

  const removeNewMsgParticipant = (participant) => {
    dispatch({
      type: REMOVE_NEW_MSG_PARTICIPANT,
      payload: {
        participant,
      },
    });
  };

  return (
    <NewMessageContext.Provider
      value={{
        ...newMessageState,
        createNewMsg,
        editNewMsgParentId,
        editNewMsgContent,
        editNewMsgParticipants,
        addNewMsgParticipant,
        removeNewMsgParticipant,
      }}
    >
      {children}
    </NewMessageContext.Provider>
  );
}

NewMessageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { NewMessageProvider, NewMessageContext };
