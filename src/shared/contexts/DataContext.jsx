import PropTypes from 'prop-types';
import { createContext, useReducer, useEffect } from 'react';
import { getData, postData, updateData, deleteData } from '../utility/api';

const DataContext = createContext();

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_LOADING = 'SET_LOADING';

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case UPDATE_ITEM:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case SET_LOADING:
      return { ...state, loading: true, error: null };

    default:
      return state;
  }
};

const DataProvider = ({ endpoint, children, options }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: [],
    loading: true,
    error: null,
  });

  const getItems = async () => {
    try {
      const data = await getData(endpoint, options.get);
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };

  const getItem = async (id) => {
    try {
      await postData(`${endpoint}/${id}`, options.get);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  const addItem = async (item) => {
    try {
      await postData(endpoint, item, options.post);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  const updateItem = async (id, updates) => {
    try {
      await updateData(`${endpoint}/${id}`, updates, options.put);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await deleteData(`${endpoint}/${id}`);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getItems();
  }, [endpoint]);

  return (
    <DataContext.Provider
      value={{ ...state, getItems, getItem, addItem, updateItem, deleteItem }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  endpoint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  options: PropTypes.object,
};

export { DataContext, DataProvider };
