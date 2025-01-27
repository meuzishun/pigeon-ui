import { createDataContext } from './createDataContext';
import { URL } from '../constants/url';
import { requestOptions } from '../constants/requestOptions';

const { DataContext: PostsContext, DataProvider: PostsProvider } =
  createDataContext(`${URL}/posts`, requestOptions);

export { PostsProvider, PostsContext };
