import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectAuth } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Verify } from 'components/Verify/Verify';

export default function Register() {
  const { verify } = useSelector(selectAuth);

  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {verify === 'register' ? <RegisterForm /> : <Verify />}
    </div>
  );
}
