import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Contact.module.css';
import { fetchDeleteContactThunks } from 'redux/thunks';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(fetchDeleteContactThunks(contact.id));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <button type="button" className={css.btn} onClick={onDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
