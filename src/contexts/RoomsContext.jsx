// import { createDataContext } from '../shared/contexts/createDataContext';
// import { URL } from '../constants/url';
// import { requestOptions } from '../constants/requestOptions';

// const { DataContext: RoomsContext, DataProvider: RoomsProvider } =
//   createDataContext(`${URL}/rooms`, requestOptions);

// export { RoomsProvider, RoomsContext };

import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { getToken } from '../services/localStorage';
import { getRoomsWithToken } from '../services/api';

const RoomsContext = createContext(null);

function RoomsProvider({ children }) {
  const LOAD = 'LOAD';
  const INITIALIZE = 'INITIALIZE';

  const initialRoomsState = {
    isInitialized: false,
    isLoading: false,
    rooms: null,
  };

  const roomsReducer = (state, action) => {
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
          rooms: action.payload.rooms,
        };
    }
  };

  const [roomsState, dispatch] = useReducer(roomsReducer, initialRoomsState);

  const getRooms = async () => {
    dispatch({
      type: LOAD,
    });
    const token = getToken();
    const response = await getRoomsWithToken(token);
    const data = await response.json();

    dispatch({
      type: INITIALIZE,
      payload: {
        rooms: data.rooms,
      },
    });
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <RoomsContext.Provider
      value={{
        ...roomsState,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
}

RoomsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { RoomsProvider, RoomsContext };
