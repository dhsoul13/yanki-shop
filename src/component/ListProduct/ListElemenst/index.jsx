import React from 'react';
import { filter } from '../../../helpers/filter';

const ListElements = ({ content }) => {
  const isNew = Boolean(content?.filter?.filter((el) => el === 'new')?.length);

  console.log(content);
  return (
    <div className="list-product__elem">
      <div className="list-product__elem-content">
        <div className="list-product__buttom-like"></div>
        <div className="list-product__elem-img">img</div>
        <div className="list-product__elem-info">
          <h2 className="list-product__elem-title">
            {content.title}
            {isNew ? <span className="list-product__new">NEW</span> : ''}
          </h2>
          <h3 className="list-product__elem-price">{content.price}</h3>
          <div className="list-product__elem-sizes">
            {content?.size?.map((el, id) => (
              <div
                key={id}
                className="list-product__elem-size"
              >
                {el}
              </div>
            ))}
          </div>
          <div className="list-product__elem-colors">
            {content?.color ? (
              <>
                {content.color.map((el, id) => (
                  <div
                    key={id}
                    className="list-product__elem-color"
                    style={{ backgroundColor: el }}
                  ></div>
                ))}
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListElements;
