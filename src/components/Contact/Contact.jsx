import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { fetchDeleteContactThunks } from 'redux/contacts/thunks';
import { ButtonStyled, DivStyled, PStyled } from './Contacts.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(fetchDeleteContactThunks(contact._id));
  };

  return (
    <DivStyled>
      <PStyled>{contact.name}</PStyled>
      <PStyled>{contact.phone}</PStyled>
      <ButtonStyled type="button" onClick={onDelete}>
        <MdClose size={24} />
      </ButtonStyled>
    </DivStyled>
  );
};
