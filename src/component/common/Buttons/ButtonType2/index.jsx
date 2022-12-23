import React from 'react';

const ButtonTypeTwo = ({ text, fun, type, ...probs }) => {
  return (
    <button
      className="button-type-two"
      type={'type'}
      onClick={fun}
      {...probs}
    >
      {text}
    </button>
  );
};

export default ButtonTypeTwo;
