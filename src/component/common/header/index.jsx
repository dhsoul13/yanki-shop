import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Basket from '../../../assets/svg/backet';
import Like from '../../../assets/svg/like';
import Serch from '../../../assets/svg/serch';
import User from '../../../assets/svg/user';
import { useScroll } from '../../../hooks/useScroll';
import BurgerMenu from '../BurgerMenu';
import MenuDown from '../MenuDown';
import SearchInput from '../SearchInput';

const Header = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [scrollY, removeScroll] = useScroll();
  const [addBg, setAddBg] = useState(false);

  /// Открытие бургера меню
  useEffect(() => {}, [location]);

  //Скролл эффект
  useEffect(() => {
    if (scrollY > 150) {
      setAddBg(true);
    }
    if (scrollY < 150) {
      setAddBg(false);
    }
  }, [scrollY]);

  removeScroll();
  const [show, setShow] = useState(false);

  ///Переходы

  const navigateHandlerFromProbs = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className={`header ${(location === '/') & !addBg ? 'main' : ''} `}>
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
                    <NavLink to="catalog">New</NavLink>
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
                  {/* <MenuDown
                    type={'lang'}
                    classList={'header'}
                    location={location}
                    addBg={addBg}
                  /> */}
                </div>

                <div className="header__type-money">
                  {/* <MenuDown
                    type={'money'}
                    classList={'header'}
                    location={location}
                    addBg={addBg}
                  /> */}
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
                <div
                  className="header__main-button-like"
                  onClick={() => {
                    navigateHandlerFromProbs('like');
                  }}
                >
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
