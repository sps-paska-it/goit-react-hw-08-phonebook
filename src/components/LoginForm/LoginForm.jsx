import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const emailId = nanoid();
  const passwordId = nanoid();

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled htmlFor={emailId}>Email</LabelStyled>
      <InputStyled id={emailId} type="email" name="email" />
      <LabelStyled htmlFor={passwordId}>Password</LabelStyled>
      <InputStyled id={passwordId} type="password" name="password" />
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </FormStyled>
  );
};
