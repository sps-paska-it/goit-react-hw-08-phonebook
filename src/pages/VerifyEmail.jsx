import { Loader } from 'components/Snipper/Snipper';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { verify } from 'redux/auth/operations';

export default function VerifyPage() {
  const { code } = useParams();

  const dispatch = useDispatch();
  dispatch(verify(code));
  return <Loader />;
}
