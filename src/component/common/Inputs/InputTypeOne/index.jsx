import React from 'react';

const InputTypeOne = ({ type, plaseholder, id, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={plaseholder}
      id={id}
      className={'input-type-one'}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTypeOne;
