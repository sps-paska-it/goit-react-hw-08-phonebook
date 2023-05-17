import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactsList.module.css';
import { Message } from 'components/Message/Message';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

const getVisibleContacts = (contacts, query) => {
  const normalizedFilter = query.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactsList = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані
  const { contacts, isLoading, error } = useSelector(getContacts);
  const query = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, query);
  // console.log(useSelector(state => state));
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
