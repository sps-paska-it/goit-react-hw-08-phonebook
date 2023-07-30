import axios from 'axios';

const URL = 'https://nodejs-hw-rest-api-contacts.onrender.com/api';

export const fetchResendVerify = async credentials => {
  const response = await axios.post(`${URL}/auth/verify`, credentials);
  console.log(response);
  return response.data;
};
