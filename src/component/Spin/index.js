import React from 'react';
import Loader from 'halogen/BounceLoader';

const LorderPosition = {
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
  background: 'rgba(255,255,255,.5)'
};
const Spin = (props) => {
  const { color = '#ee8888', size = '35px', margin = '4px' } = props;
  return (
    <div style={LorderPosition}>
      <Loader color={color} size={size} margin={margin} />
    </div>

  );
};

export default Spin;
