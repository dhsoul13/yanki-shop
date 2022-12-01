import React, { useEffect, useState } from 'react';
import Basket from '../../../assets/svg/backet';
import Like from '../../../assets/svg/like';
import Serch from '../../../assets/svg/serch';
import User from '../../../assets/svg/user';
import BurgerMenu from '../BurgerMenu';
import MenuDown from '../MenuDown';
import SearchInput from '../SearchInput';

const Header = ({ location }) => {
  /// Открытие бургера меню
  useEffect(() => {
    console.log(location);
  }, [location]);

  const [show, setShow] = useState(false);

  return (
    <div className={`header ${location === '/' ? 'main' : ''}`}>
      <div className="header__container container">
        <div className="header__content">
          <div className="header__button-burger">
            <BurgerMenu
              className={'header'}
              setShow={setShow}
              show={show}
              location={location}
            />
          </div>
          {show ? (
            ''
          ) : (
            <>
              <div className="header__main">
                <ul className="header__main-src">
                  <li className={`${location === '/' ? 'src-main' : 'src'}`}>
                    New
                  </li>
                  <li className={`${location === '/' ? 'src-main' : 'src'}`}>
                    Каталог
                  </li>
                  <li className={`${location === '/' ? 'src-main' : 'src'}`}>
                    О нас
                  </li>
                </ul>

                <h2 className="header__title">YANKI</h2>

                <div className="header__type-lang">
                  <MenuDown
                    type={'lang'}
                    classList={'header'}
                    location={location}
                  />
                </div>

                <div className="header__type-money">
                  <MenuDown
                    type={'money'}
                    classList={'header'}
                    location={location}
                  />
                </div>
              </div>
              <div className="header__main-button">
                <div className="header__main-button-serch">
                  <Serch />
                  <div className="header__main-button-elem">
                    <SearchInput className={'header'} />
                  </div>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
