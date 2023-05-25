import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contacts.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContactsThunks } from 'redux/contacts/thunks';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <h1 className={styles.mainTitle}>Phone book</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
      <ToastContainer />
    </>
  );
}
