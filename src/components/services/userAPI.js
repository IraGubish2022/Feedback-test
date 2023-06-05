import axios from 'axios';

axios.defaults.baseURL = 'https://63a8a4f3f4962215b586468f.mockapi.io';
//axios.defaults.baseURL = 'https://640865a12f01352a8a91b182.mockapi.io/api/v1/';

export const getAllUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};

export const updateUserFollowers = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, followers);
  return data;
};