import PropTypes from 'prop-types';
import { createContext, useReducer, useEffect } from 'react';

export const createDataContext = (endpoint, requestOptions) => {
  // API operations with requestOptions
  const api = {
    fetchData: async (endpoint) => {
      const response = await fetch(endpoint, {
        ...requestOptions.get,
      });

      const json = await response.json();
      console.log(json);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      return response.json();
    },

    postData: async (endpoint, data) => {
      const response = await fetch(endpoint, {
        ...requestOptions.post,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      return response.json();
    },

    updateData: async (endpoint, data) => {
      const response = await fetch(endpoint, {
        ...requestOptions.put,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
      }

      return response.json();
    },

    deleteData: async (endpoint) => {
      const response = await fetch(endpoint, {
        ...requestOptions.delete,
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      return response.json();
    },
  };

  // Create context and extract provider
  const DataContext = createContext();
  const { Provider } = DataContext;

  // Constants for reducer function
  const SET_LOADING = 'SET_LOADING';
  const FETCH_SUCCESS = 'FETCH_SUCCESS';
  const FETCH_ERROR = 'FETCH_ERROR';
  const UPDATE_DATA = 'UPDATE_DATA';

  const dataReducer = (state, action) => {
    switch (action.type) {
      case FETCH_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: null,
        };

      case FETCH_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };

      case UPDATE_DATA:
        return {
          ...state,
          data: action.payload,
        };

      case SET_LOADING:
        return { ...state, isLoading: true, error: null };

      default:
        return state;
    }
  };

  const initialState = {
    data: null,
    isLoading: true,
    error: null,
  };

  const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const getItems = async () => {
      try {
        const data = await api.fetchData(endpoint);
        dispatch({ type: FETCH_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      }
    };

    const addItem = async (item) => {
      try {
        await api.postData(endpoint, item);
        const data = await api.fetchData(endpoint);
        dispatch({ type: UPDATE_DATA, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.error(error);
      }
    };

    const updateItem = async (id, updates) => {
      try {
        await api.updateData(`${endpoint}/${id}`, updates);
        const data = await api.fetchData(endpoint);
        dispatch({ type: UPDATE_DATA, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.error(error);
      }
    };

    const deleteItem = async (id) => {
      try {
        await api.deleteData(`${endpoint}/${id}`);
        const data = await api.fetchData(endpoint);
        dispatch({ type: UPDATE_DATA, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.error(error);
      }
    };

    useEffect(() => {
      dispatch({ type: SET_LOADING });
      getItems();
    }, []);

    return (
      <Provider value={{ ...state, getItems, addItem, updateItem, deleteItem }}>
        {children}
      </Provider>
    );
  };

  DataProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
  };

  return {
    DataContext,
    DataProvider,
  };
};
