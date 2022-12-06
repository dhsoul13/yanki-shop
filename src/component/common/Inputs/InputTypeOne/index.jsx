import React from 'react';

const InputTypeOne = ({ type, plaseholder, id }) => {
  return (
    <input
      type={type}
      placeholder={plaseholder}
      id={id}
      className={'input-type-one'}
    />
  );
};

export default InputTypeOne;
