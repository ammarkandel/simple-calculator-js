import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;

  return (
    <div>
      {result}
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.node.isRequired,
};

export default Display;
