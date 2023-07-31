import { ButtonStyled, H2styled, ImgStyled, PStyled } from './Verify.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { fetchResendVerify } from 'api/fetch-user';
import { useState } from 'react';
import SendListImage from './sendEmail.jpg';
import SendListsImage from './manySendEmail.png';
import { changeRegister } from 'redux/auth/slice';

export const Verify = () => {
  const [send, setSend] = useState('');
  const dispatch = useDispatch();

  const { user } = useSelector(selectAuth);

  const handleResendVerify = () => {
    fetchResendVerify({ email: user.email })
      .then(({ message }) => {
        setSend(message);
      })
      .catch(err => console.log(err.message));
  };

  const handleResendRegister = () => {
    dispatch(changeRegister('register'));
  };

  return (
    <>
      <H2styled>Email verification</H2styled>
      {send === '' ? (
        <>
          <PStyled>
            We have sent you a letter to the e-mail address you specified during
            registration. Please verify your email to continue working. Thank
            you.{' '}
          </PStyled>
          <ImgStyled src={SendListImage} alt="Send list" />
          <PStyled>
            If you did not receive the letter, click the "Send again" button.
            Please check your spam folder before clicking the resend button.{' '}
          </PStyled>
        </>
      ) : (
        <>
          <PStyled>
            We have resent the letter to your e-mail, go to your e-mail to
            verify the e-mail.
          </PStyled>
          <ImgStyled src={SendListsImage} alt="Send list" />
        </>
      )}
      <ButtonStyled type="button" onClick={handleResendVerify}>
        Send again
      </ButtonStyled>
      <ButtonStyled type="button" onClick={handleResendRegister}>
        Register again
      </ButtonStyled>
    </>
  );
};
