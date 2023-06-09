import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectContactsAll } from 'redux/contacts/selectors';
import { selectContactsFiter } from 'redux/filter/selectors';
import { Message } from 'components/Message/Message';
import { useEffect } from 'react';
import { fetchContactsThunks } from 'redux/contacts/thunks';
import { LiStyled, UlStyled } from './ContactsList.styled';
import { Loader } from 'components/Snipper/Snipper';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunks());
  }, [dispatch]);

  const visibleContacts = useSelector(selectContactsFiter);
  const { contacts, isLoading, error } = useSelector(selectContactsAll);

  return (
    <>
      {<Loader loading={isLoading} />}
      {error && <p>{error}</p>}
      {contacts.length === 0 ? (
        <Message message={"You don't have any contact added"} />
      ) : (
        <UlStyled>
          {visibleContacts.map(contact => (
            <LiStyled key={contact._id}>
              <Contact contact={contact} />
            </LiStyled>
          ))}
        </UlStyled>
      )}
    </>
  );
};
