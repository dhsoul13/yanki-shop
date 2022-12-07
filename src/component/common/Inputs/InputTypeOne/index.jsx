import React from 'react';
import { useState } from 'react';
import ShowPassword from '../../../../assets/svg/showPassword';

const InputTypeOne = ({ type, plaseholder, id, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlerShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {type !== 'password' ? (
        <div className="input-type-one">
          <input
            type={type}
            placeholder={plaseholder}
            id={id}
            className={'input-type-one__input'}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <div className="input-type-one">
          <input
            type={!showPassword ? type : 'text'}
            placeholder={plaseholder}
            id={id}
            className={'input-type-one__input'}
            value={value}
            onChange={onChange}
          />
          <ShowPassword
            onClick={handlerShowPassword}
            className={
              showPassword
                ? 'input-type-one__disable'
                : 'input-type-one__active'
            }
          />
        </div>
      )}
    </>
  );
};

export default InputTypeOne;
