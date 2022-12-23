import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { price, size, sortMaxMin } from '../../helpers/sort';
import ButtonTypeTwo from '../common/Buttons/ButtonType2';
import { MenuDownTwo } from '../common/MenuDown';

const SortComponent = ({ state, setState, buttonFunction }) => {
  const [show, setShow] = useState(false);

  const priceHandler = (data) => {
    setState({
      ...state,
      min: data[0],
      max: data[1],
    });
  };

  const sizeHandler = (data) => {
    setState({
      ...state,
      size: [...data],
    });
  };

  const minMaxHandler = (data) => {
    setState({
      ...state,
      sortMaxMin: data.type,
    });
  };

  const buttonHandler = () => {
    buttonFunction(state);
  };

  useEffect(() => {
    const isTrue =
      state.min === 0 &&
      state.max === 40000 &&
      state.size.length === 0 &&
      state.sortMaxMin === '';

    if (isTrue) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [state]);

  return (
    <div className="sortComonent">
      <div className="sortComonent__elem">
        <MenuDownTwo
          textMenu={'Размер'}
          type={'size'}
          content={size}
          onClick={sizeHandler}
        />
      </div>
      <div className="sortComonent__elem">
        <MenuDownTwo
          textMenu={'Цена'}
          type={'price'}
          content={price}
          onClick={priceHandler}
        />
      </div>
      <div className="sortComonent__elem">
        <MenuDownTwo
          textMenu={'Сортировать по'}
          type={'minmax'}
          content={sortMaxMin}
          onClick={minMaxHandler}
        />
      </div>
      <div className="sortComonent__button">
        {show ? (
          <ButtonTypeTwo
            text={'Нажать'}
            fun={buttonHandler}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SortComponent;
