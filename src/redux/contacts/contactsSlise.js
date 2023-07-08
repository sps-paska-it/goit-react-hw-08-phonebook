import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAddContactThunks,
  fetchContactsThunks,
  fetchDeleteContactThunks,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = null;
};

const handleFulfilledCreat = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunks.pending, handlePending)
      .addCase(fetchContactsThunks.fulfilled, handleFulfilledGet)
      .addCase(fetchAddContactThunks.fulfilled, handleFulfilledCreat)
      .addCase(fetchDeleteContactThunks.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          fetchContactsThunks.rejected,
          fetchAddContactThunks.rejected,
          fetchDeleteContactThunks.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
