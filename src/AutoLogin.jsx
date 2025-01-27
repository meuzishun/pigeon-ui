import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useAuth from './hooks/useAuth';

const AutoLogin = ({ creds, children }) => {
  const { login } = useAuth();

  useEffect(() => {
    login(creds);
  }, []);

  return <>{children}</>;
};

AutoLogin.propTypes = {
  creds: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default AutoLogin;
