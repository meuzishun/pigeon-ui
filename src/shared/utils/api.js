export const getData = async (endpoint, options) => {
  const response = await fetch(endpoint, { ...options });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const postData = async (endpoint, data, options) => {
  const response = await fetch(endpoint, {
    ...options,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to post data');
  }

  return response.json();
};

export const updateData = async (endpoint, data, options) => {
  const response = await fetch(endpoint, {
    ...options,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update data');
  }

  return response.json();
};

export const deleteData = async (endpoint, options) => {
  const response = await fetch(endpoint, { ...options });

  if (!response.ok) {
    throw new Error('Failed to delete data');
  }

  return response.json();
};
