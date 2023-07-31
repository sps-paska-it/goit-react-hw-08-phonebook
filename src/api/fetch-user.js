import axios from 'axios';

// const URL = 'http://localhost:2217/api';
const URL = 'https://nodejs-hw-rest-api-contacts.onrender.com/api';

export const fetchResendVerify = async credentials => {
  const response = await axios.post(`${URL}/auth/verify`, credentials);
  return response.data;
};
