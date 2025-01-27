import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';

const DashboardContext = createContext(null);

function DashboardProvider({ children }) {
  const DISPLAY_PREVIEWS = 'DISPLAY_PREVIEWS';
  const SELECT_CONVERSATION = 'SELECT_CONVERSATION';
  const SELECT_CONVERSATION_PARENT_ID = 'SELECT_CONVERSATION_PARENT_ID';
  const ANIMATION_END = 'ANIMATION_END';

  const initialDashboardState = {
    viewConversation: false,
    selectedConversation: null,
    selectedId: null,
    isAnimating: false,
  };

  const DashboardReducer = (state, action) => {
    switch (action.type) {
      case DISPLAY_PREVIEWS:
        return {
          ...state,
          isAnimating: true,
          viewConversation: false,
        };

      case SELECT_CONVERSATION:
        return {
          ...state,
          viewConversation: true,
          selectedConversation: action.payload.conversation,
          isAnimating: true,
        };

      case SELECT_CONVERSATION_PARENT_ID:
        return {
          ...state,
          viewConversation: true,
          selectedId: action.payload.id,
        };

      case ANIMATION_END:
        return {
          ...state,
          selectedConversation: state.viewConversation
            ? state.selectedConversation
            : null,
          isAnimating: false,
        };
    }
  };

  const [dashboardState, dispatch] = useReducer(
    DashboardReducer,
    initialDashboardState
  );

  const displayConversation = (conversation) => {
    dispatch({
      type: SELECT_CONVERSATION,
      payload: {
        conversation,
      },
    });
  };

  const setSelectedId = (id) => {
    dispatch({
      type: SELECT_CONVERSATION_PARENT_ID,
      payload: {
        id,
      },
    });
  };

  const displayPreviews = () => {
    dispatch({
      type: DISPLAY_PREVIEWS,
    });
  };

  const handleTransitionEnd = () => {
    dispatch({
      type: ANIMATION_END,
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        ...dashboardState,
        displayConversation,
        setSelectedId,
        displayPreviews,
        handleTransitionEnd,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

DashboardProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { DashboardProvider, DashboardContext };
