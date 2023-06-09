import { RotatingLines } from 'react-loader-spinner';

import PropTypes from 'prop-types';

const Loader = ({ loading }) => {
  return (
    <div>
      <RotatingLines
        loading={loading}
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
