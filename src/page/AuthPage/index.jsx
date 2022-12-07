import React from 'react';
import ButtonTypeTwo from '../../component/common/Buttons/ButtonType2';
import InputTypeOne from '../../component/common/Inputs/InputTypeOne';

const AuthPage = () => {
  return (
    <div className="auth">
      <div className="auth__container container">
        <div className="auth__content log">
          <form className="auth__form log__form">
            <h2 className="auth__title log__title common-title-v2">
              Авторизация
            </h2>
            <div className="auth__input log__input">
              <InputTypeOne
                plaseholder={'Введите email'}
                type={'text'}
              />
            </div>
            <div className="auth__input log__input">
              <InputTypeOne
                plaseholder={'Введите password'}
                type={'password'}
              />
            </div>
            <div>
              <ButtonTypeTwo text={'Продолжить'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
