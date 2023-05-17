import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addContacts(state, action) {
    //   state.contacts.push(action.payload);
    // },
    // deleteContacts(state, action) {
    //   return {
    //     contacts: state.contacts.filter(
    //       contact => contact.id !== action.payload
    //     ),
    //   };
    // },
    // Виконається в момент старту HTTP-запиту
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Виконається якщо HTTP-запит додавання контакту завершився успішно
    fetchingAddSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    // Виконається якщо HTTP-запит додавання контакту завершився з помилкою
    fetchingAddError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Виконається якщо HTTP-запит видалання контакту завершився успішно
    fetchingDeleteSuccess(state, action) {
      const id = action.payload.id;
      return {
        contacts: state.contacts.filter(contact => contact.id !== id),
        error: null,
      };
    },
    // Виконається якщо HTTP-запит видалання контакту завершився з помилкою
    fetchingDeleteError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  // addContacts,
  // deleteContacts,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  fetchingAddSuccess,
  fetchingAddError,
  fetchingDeleteSuccess,
  fetchingDeleteError,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
