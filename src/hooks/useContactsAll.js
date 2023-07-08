import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const useContactsAll = () => ({
  contacts: useSelector(selectContacts),
  isLoading: useSelector(selectIsLoading),
  error: useSelector(selectError),
});
