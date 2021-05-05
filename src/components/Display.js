import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result, animation, setAnim } = props;
  return (
    <div className="display">
      <span
        className={`span-ripple ${animation}`}
        onAnimationEnd={() => setAnim(false)}
      />
      <p>{result}</p>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
  animation: PropTypes.string.isRequired,
  setAnim: PropTypes.func.isRequired,
};

export default Display;
