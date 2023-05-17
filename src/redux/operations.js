import axios from 'axios';
import {
  fetchingAddError,
  fetchingAddSuccess,
  fetchingDeleteError,
  fetchingDeleteSuccess,
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './contactsSlise';

axios.defaults.baseURL = 'https://64632c7d7a9eead6fadf02c2.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/contacts');
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

export const fetchAddContact = contact => async dispatch => {
  try {
    // HTTP-запит
    const response = await axios.post('/contacts', contact);
    // Обробка даних
    console.log(response.data);
    dispatch(fetchingAddSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingAddError(e.message));
  }
};

export const fetchDeleteContact = id => async dispatch => {
  try {
    // HTTP-запит
    const response = await axios.delete(`/contacts/${id}`);
    // Обробка даних
    dispatch(fetchingDeleteSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingDeleteError(e.message));
  }
};
