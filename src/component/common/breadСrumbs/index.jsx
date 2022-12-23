import React from 'react';
import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Arrow from '../../../assets/svg/arrow';

const pathRus = [
  {
    path: 'catalog',
    pathRus: 'каталог',
  },
];

const BreadCrumbs = () => {
  const path = useLocation()
    ?.pathname?.split('/')
    ?.filter((el) => el);

  const rusPath = useMemo(() => {
    return pathRus.filter((el) =>
      path.find((elem) => elem.toLowerCase() === el.path.toLowerCase())
    );
  }, [path]);
  return (
    <div className="breadCrumbs">
      <div className="breadCrumbs__elem">
        <NavLink to={'/'}>Главная</NavLink>
      </div>
      {rusPath.map((el, index) => (
        <div
          key={index}
          className="breadCrumbs__elem"
        >
          <div className="breadCrumbs__svg">
            <Arrow />
          </div>
          <NavLink to={`/${el.path}`}>{el.pathRus}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
