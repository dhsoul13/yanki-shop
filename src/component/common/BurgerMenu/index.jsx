import React, { useState } from 'react';
import BurgerButtonPassive from '../../../assets/svg/burger/passive';
import Exit from '../../../assets/svg/exit';

const BurgerMenu = ({ className, show, setShow, location }) => {
  /// Переключение меню

  const handlerChange = () => {
    setShow(!show);
  };
  return (
    <div
      className={`${className}__burger-menu burger-menu`}
      onClick={() => {
        handlerChange();
      }}
    >
      <div className={`${className}__burger-menu-el burger-menu__el`}>
        {show ? <Exit /> : <BurgerButtonPassive />}
      </div>

      {!show ? (
        ''
      ) : (
        <ul className={`${className}__burger-menu-list burger-menu__list`}>
          <li className={`${location === '/' ? 'src-main' : 'src'}`}>
            ОПЛАТА И ДОСТАВКА
          </li>
          <li className={`${location === '/' ? 'src-main' : 'src'}`}>
            УСЛОВИЯ ВОЗВРАТА
          </li>
          <li className={`${location === '/' ? 'src-main' : 'src'}`}>
            КОНТАКТЫ
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
