import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handleClick, children } = props;

  return (
    <button
      className="button"
      type="button"
      onClick={() => handleClick(children)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
