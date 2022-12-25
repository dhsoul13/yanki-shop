import React from 'react';
import ButtonTypeOne from '../../component/common/Buttons/ButtonType1';

const ErrorPage = ({ goBackMainPageFunction }) => {
  return (
    <div className="error">
      <div className="error__container container">
        <div className="error__content">
          <div className="error__info">
            <h2 className="error__title">
              Ошибка: <span>404</span>
            </h2>
            <div className="error__line"></div>
            <p className="error__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              porro at minima cupiditate, eum error iusto esse dolorem
              voluptatum et consectetur explicabo, expedita officia recusandae
              cum beatae ducimus dignissimos mollitia.
            </p>
            <div className="error__button">
              <ButtonTypeOne
                text={'На главную'}
                fun={goBackMainPageFunction}
                style={{
                  color: '#252525',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ErrorPage);
