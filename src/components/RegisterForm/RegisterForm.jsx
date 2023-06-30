import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const usernameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled htmlFor={usernameId}>Username</LabelStyled>
      <InputStyled id={usernameId} type="text" name="name" />
      <LabelStyled htmlFor={emailId}>Email</LabelStyled>
      <InputStyled id={emailId} type="email" name="email" />
      <LabelStyled htmlFor={passwordId}>Password</LabelStyled>
      <InputStyled id={passwordId} type="password" name="password" />
      <ButtonStyled type="submit">Register</ButtonStyled>
    </FormStyled>
  );
};
