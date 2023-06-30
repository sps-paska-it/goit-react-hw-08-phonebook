import PropTypes from 'prop-types';

export const Message = ({ message }) => {
  return <b>{message}</b>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
