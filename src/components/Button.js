import PropTypes from 'prop-types';

const Button = (props) => {
  const { children } = props;
  return (
    <button type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
