import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';
import { Loader } from 'components/Snipper/Snipper';

const HomePage = lazy(() => import('../../pages/Home.jsx'));
const RegisterPage = lazy(() => import('../../pages/Register.jsx'));
const LoginPage = lazy(() => import('../../pages/Login.jsx'));
const VerifyPage = lazy(() => import('../../pages/VerifyEmail.jsx'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader loading={isRefreshing} />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/verify/:code"
          element={<RestrictedRoute component={<VerifyPage />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
