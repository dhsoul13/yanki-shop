import React from 'react';
import SpinerCustome from '../common/Spiner';
import ListElements from './ListElemenst';

const ListProduct = ({ data }) => {
  console.log(data);
  return (
    <div className="list-product">
      {data.length ? (
        <>
          {data.map((el) => (
            <div key={el.id}>
              <ListElements content={el} />
            </div>
          ))}
        </>
      ) : (
        <h2>Нет товара(</h2>
      )}
    </div>
  );
};

export default ListProduct;
