import React from 'react';

const ButtonTypeTwo = ({ text, fun, type }) => {
  return (
    <button
      className="button-type-two"
      type={'type'}
    >
      {text}
    </button>
  );
};

export default ButtonTypeTwo;
