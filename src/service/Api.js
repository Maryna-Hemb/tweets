import axios from 'axios';

const BASE_URL = new URL('https://642f9845c26d69edc87f8191.mockapi.io/tweets');

export const fetcUsers = async page => {
  const responce = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return responce.data;
};

export const addUser = async values => {
  const responce = await axios.post(`${BASE_URL}`, values);
  return responce.data;
};

export const changeUser = async (id, followers) => {
  const responce = await axios.put(`${BASE_URL}/${id}`, {
    followers: `${followers}`,
  });
  return responce.data;
};
