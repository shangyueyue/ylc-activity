import React from 'react';

const Divide = (props) => {
  const {
    width = 100, height = 1, color = '#bebdbd', style
  } = props;
  return (
    <div
      style={{
        position: 'absolute',
        width: `${width}%`,
        height: `${height}px`,
        background: `${color}`,
        ...style
      }}
    />
  );
};

export default Divide;
