import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectContacts, selectFilter } from '../../redux/selectors';
import css from './ContactsList.module.css';
import { Message } from 'components/Message/Message';
import { useEffect } from 'react';
import { fetchContactsThunks } from 'redux/thunks';

const getVisibleContacts = (contacts, query) => {
  const normalizedFilter = query.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunks());
  }, [dispatch]);
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const query = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, query);
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {contacts.length === 0 ? (
        <Message message={"You don't have any contact added"} />
      ) : (
        <ul className={css.list}>
          {visibleContacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
