import { createDataContext } from '../shared/contexts/createDataContext';
import { URL } from '../constants/url';
import { requestOptions } from '../constants/requestOptions';

const { DataContext: RoomsContext, DataProvider: RoomsProvider } =
  createDataContext(`${URL}/rooms`, requestOptions);

export { RoomsProvider, RoomsContext };
