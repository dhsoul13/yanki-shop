import React from 'react';
import CatalogPage from '../../page/CatalogPage';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { sort } from '../../utils/sort';

const productData = async (onChange, url, param = [], spiner) => {
  spiner(true);
  const request = await (await fetch(url)).json();
  if (param.length) {
    const mas = await sort({
      mas: request,
      param,
    });
    onChange(mas);
    spiner(false);
  } else {
    onChange(request);
    spiner(false);
  }
};

const CatalogContainer = () => {
  const [reset, setReset] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [spiner, setSpiner] = useState(false);

  /// url-filter
  const handlerAddSearch = (el) => {
    const min = searchParams.get('min');
    const max = searchParams.get('max');
    const size = searchParams.get('size');
    const sortMaxMin = searchParams.get('sortMaxMin');
    if (min || max || sortMaxMin || size) {
      setSearchParams({
        type: el,
        min,
        max,
        sortMaxMin,
        size,
      });
    } else {
      setSearchParams(el === '' ? '' : { type: el });
    }
  };

  ///sort
  const handlerAddSort = (el) => {
    const type = searchParams.get('type');
    if (type) {
      setSearchParams({ type: type, ...el, size: el.size.toString() });
    } else {
      setSearchParams({ ...el, size: el.size.toString() });
    }
  };

  useEffect(() => {
    const mas = [...searchParams.entries()];
    if (mas.length) {
      setReset(true);
    } else {
      setReset(false);
    }
  }, [searchParams]);

  ////resetFunction

  const resetFunction = () => {
    setSearchParams({});
  };

  /// Продукты

  useEffect(() => {
    if ([...searchParams.entries()].length) {
      productData(
        setData,
        'http://localhost:3001/product',
        [...searchParams.entries()],
        setSpiner
      );
    } else {
      productData(setData, 'http://localhost:3001/product', [], setSpiner);
    }
  }, [searchParams]);

  return (
    <>
      <CatalogPage
        filterOnClick={handlerAddSearch}
        sortOnClick={handlerAddSort}
        resetState={reset}
        resetFunction={resetFunction}
        data={data}
        spinerActive={spiner}
      />
    </>
  );
};

export default CatalogContainer;
