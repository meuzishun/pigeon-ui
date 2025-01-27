const storeUserDataAndToken = (data) => {
  const { user, token } = data;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', JSON.stringify(token));
};

const clearUserDataAndToken = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const clearUser = () => {
  localStorage.removeItem('user');
};

const getToken = () => {
  const token = localStorage.getItem('token');
  const parsedToken = JSON.parse(token);
  return parsedToken;
};

const clearToken = () => {
  localStorage.removeItem('token');
};

export {
  storeUserDataAndToken,
  clearUserDataAndToken,
  setUser,
  clearUser,
  getToken,
  clearToken,
};
