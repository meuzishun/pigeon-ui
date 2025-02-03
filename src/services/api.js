import { API_URL } from '../constants/url';

const postLoginData = async (formData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const postRegisterData = async (formData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const getProfileWithToken = async (token) => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

const getMessagesWithToken = async (token) => {
  const response = await fetch(`${API_URL}/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const getFriendsWithToken = async (token) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const postMessageWithTokenAndData = async (token, formData) => {
  const response = await fetch(`${API_URL}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const editProfileWithTokenAndData = async (token, formData) => {
  const response = await fetch(`${API_URL}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const deleteFriendWithTokenAndId = async (token, id) => {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const searchUsersWithTokenAndStr = async (token, str) => {
  const response = await fetch(`${API_URL}/users/search?query=${str}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const addFriendWithTokenAndId = async (token, id) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ contactId: id }),
  });

  return response;
};

const getRoomsWithToken = async (token) => {
  const response = await fetch(`${API_URL}/rooms`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export {
  postLoginData,
  postRegisterData,
  getProfileWithToken,
  getMessagesWithToken,
  getFriendsWithToken,
  postMessageWithTokenAndData,
  editProfileWithTokenAndData,
  deleteFriendWithTokenAndId,
  searchUsersWithTokenAndStr,
  addFriendWithTokenAndId,
  getRoomsWithToken,
};
