import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectContactsAll = createSelector(
  [selectContacts, selectIsLoading, selectError],
  (contacts, isLoading, error) => {
    return { contacts, isLoading, error };
  }
);
