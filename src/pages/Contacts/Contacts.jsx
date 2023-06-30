import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContactsThunks } from 'redux/contacts/thunks';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { H1Styled, H2Styled } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phone book</title>
      </Helmet>
      <H1Styled>Phone book</H1Styled>
      <ContactForm />
      <H2Styled>Contacts</H2Styled>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
      <ToastContainer />
    </>
  );
}
