import { ButtonStyled, H2styled, PStyled } from './Verify.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { fetchResendVerify } from 'api/fetch-user';
import { useState } from 'react';

export const Verify = () => {
  const [send, setSend] = useState('');

  const { user } = useSelector(selectAuth);

  const handleResendVerify = () => {
    fetchResendVerify({ email: user.email })
      .then(({ message }) => {
        setSend(message);
      })
      .catch(err => console.log(err.message));
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
          <PStyled>
            If you did not receive the letter, click the "Send again" button.
            Please check your spam folder before clicking the resend button.{' '}
          </PStyled>
        </>
      ) : (
        <PStyled>
          We have resent the letter to your e-mail, go to your e-mail to verify
          the e-mail.
        </PStyled>
      )}
      <ButtonStyled type="button" onClick={handleResendVerify}>
        Send again
      </ButtonStyled>
    </>
  );
};
