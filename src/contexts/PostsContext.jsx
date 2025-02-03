import { createDataContext } from './createDataContext';
import { API_URL } from '../constants/url';
import { requestOptions } from '../constants/requestOptions';

const { DataContext: PostsContext, DataProvider: PostsProvider } =
  createDataContext(`${API_URL}/posts`, requestOptions);

export { PostsProvider, PostsContext };
