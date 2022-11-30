import React from 'react';
import Basket from '../../../assets/svg/backet';
import BurgerButtonPassive from '../../../assets/svg/burger/passive';
import Like from '../../../assets/svg/like';
import Serch from '../../../assets/svg/serch';
import User from '../../../assets/svg/user';
import MenuDown from '../MenuDown';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__content">
          <div className="header__button-burger">
            <BurgerButtonPassive />
          </div>
          <div className="header__main">
            <ul className="header__main-src">
              <li className="src-lag">New</li>
              <li className="src-lag">Каталог</li>
              <li className="src-lag">О нас</li>
            </ul>

            <h2 className="header__title">YANKI</h2>

            <div className="header__type-lang">
              <MenuDown
                type={'lang'}
                className={'header'}
              />
            </div>

            <div className="header__type-money">
              <MenuDown
                type={'money'}
                className={'header'}
              />
            </div>
          </div>
          <div className="header__main-button">
            <div className="header__main-button-serch">
              <Serch />
            </div>
            <div className="header__main-button-user">
              <User />
            </div>
            <div className="header__main-button-like">
              <Like />
            </div>
            <div className="header__main-button-busket">
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
