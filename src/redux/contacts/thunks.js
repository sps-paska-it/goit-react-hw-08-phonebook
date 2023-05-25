import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchContacts,
  fetchDeleteContact,
} from './operations';

export const fetchContactsThunks = createAsyncThunk(
  'contacts/get',
  (_, thunkAPI) => fetchContacts(thunkAPI)
);

export const fetchAddContactThunks = createAsyncThunk(
  'contacts/add',
  (contact, thunkAPI) => fetchAddContact(contact, thunkAPI)
);

export const fetchDeleteContactThunks = createAsyncThunk(
  'contacts/delete',
  (id, thunkAPI) => fetchDeleteContact(id, thunkAPI)
);
