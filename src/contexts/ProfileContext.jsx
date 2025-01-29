import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import useLoadingModal from '../hooks/useLoadingModal';
import { getToken } from '../services/localStorage.js';
import {
  getProfileWithToken,
  editProfileWithTokenAndData,
} from '../services/api.js';

const LOAD = 'LOAD';
const INITIALIZE = 'INITIALIZE';
const EDIT = 'EDIT';
const EDITFIELD = 'EDITFIELD';
const SAVE = 'SAVE';
const UNDO = 'UNDO';
const ERROR = 'ERROR';

const initialProfileState = {
  isLoading: false,
  isInitialized: false,
  isEdited: false,
  profile: null,
  editField: null,
  error: null,
};

const profileReducer = (state, action) => {
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
        profile: action.payload.profile,
      };
    case EDITFIELD:
      return {
        ...state,
        editField: action.payload.label,
      };
    case EDIT:
      return {
        ...state,
        isEdited: true,
        profile: {
          ...state.profile,
          [action.payload.label]: action.payload.value,
        },
      };
    case SAVE:
      return {
        ...state,
        isLoading: false,
        isInitialized: true,
        editField: null,
        isEdited: false,
        profile: action.payload.profile,
      };
    case UNDO:
      return {
        ...state,
        isLoading: false,
        isInitialized: true,
        editField: null,
        isEdited: false,
        profile: action.payload.profile,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        isInitialized: false,
        editField: null,
        isEdited: false,
        profile: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const ProfileContext = createContext(null);

function ProfileProvider({ children }) {
  const [profileState, dispatch] = useReducer(
    profileReducer,
    initialProfileState
  );
  const { setShowLoadingModal } = useLoadingModal();

  const initialize = async () => {
    setShowLoadingModal(true);
    dispatch({
      type: LOAD,
    });
    const token = getToken();
    const response = await getProfileWithToken(token);
    const data = await response.json();

    if (!response.ok) {
      dispatch({
        type: ERROR,
        payload: {
          error: data.message,
        },
      });
      setShowLoadingModal(false);
      return;
    }

    dispatch({
      type: INITIALIZE,
      payload: {
        profile: data.user,
      },
    });
    setShowLoadingModal(false);
  };

  const setEditField = async (label) => {
    dispatch({
      type: EDITFIELD,
      payload: {
        label,
      },
    });
  };

  const editProfile = async (label, value) => {
    dispatch({
      type: EDIT,
      payload: {
        label,
        value,
      },
    });
  };

  const saveProfile = async () => {
    const token = getToken();
    const response = await editProfileWithTokenAndData(
      token,
      profileState.profile
    );
    const data = await response.json();

    if (!response.ok) {
      dispatch({
        type: ERROR,
        payload: {
          error: data.message,
        },
      });
      return;
    }

    dispatch({
      type: SAVE,
      payload: {
        profile: data.user,
      },
    });
  };

  const revertProfile = async () => {
    const token = getToken();
    const response = await getProfileWithToken(token);
    const data = await response.json();

    if (!response.ok) {
      dispatch({
        type: ERROR,
        payload: {
          error: data.message,
        },
      });
      return;
    }

    dispatch({
      type: UNDO,
      payload: {
        profile: data.user,
      },
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        ...profileState,
        setEditField,
        editProfile,
        saveProfile,
        revertProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

ProfileProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ProfileProvider, ProfileContext };
