import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { Button } from 'components/Button/Button';
import { fetchAddContactThunks } from 'redux/contacts/thunks';
import { FormStyled, InputStyled, LabelStyled } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value.trim();
    const repead = contacts.find(contact => contact.name === name);
    if (repead) {
      toast(`${name} is already in contacts`);
      return;
    }
    const phone = form.elements.phone.value.trim();
    const contact = { name, phone };
    dispatch(fetchAddContactThunks(contact));
    form.reset();
  };

  const nameId = nanoid();
  const phoneId = nanoid();

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor={nameId}>Name</LabelStyled>
      <InputStyled
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Anna Maria"
        autoComplete="off"
        required
      />
      <LabelStyled htmlFor={phoneId}>Number</LabelStyled>
      <InputStyled
        id={phoneId}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="+38 099 01 010 01"
        autoComplete="off"
        required
      />
      <Button type="submit">Add contacts</Button>
    </FormStyled>
  );
};
