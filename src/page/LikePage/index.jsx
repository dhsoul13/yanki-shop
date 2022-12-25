import React from 'react';
import BreadCrumbs from '../../component/common/breadСrumbs';
import SpinerCustome from '../../component/common/Spiner';
import ListProduct from '../../component/ListProduct';

const LikePage = ({ spiner, data }) => {
  return (
    <div className="like">
      <div className="like__container container">
        <div className="like__breadCrumbs">
          <BreadCrumbs />
        </div>
        <div className="like__content">
          <h2 className="like__title">Избранное</h2>
          <div className="like__body-card">
            {spiner ? <SpinerCustome /> : <ListProduct data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikePage;
