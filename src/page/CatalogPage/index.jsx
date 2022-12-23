import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import BreadCrumbs from '../../component/common/breadСrumbs';
import SpinerCustome from '../../component/common/Spiner';
import FilterComponent from '../../component/Filter';
import ListProduct from '../../component/ListProduct';
import SortComponent from '../../component/Sort';
import { filter } from '../../helpers/filter';

const CatalogPage = ({
  filterOnClick,
  sortOnClick,
  resetState,
  resetFunction,
  data,
  spinerActive,
}) => {
  /// sort

  const [sort, setSort] = useState({
    min: 0,
    max: 40000,
    size: [],
    sortMaxMin: '',
  });

  return (
    <div className="catalog">
      <div className="catalog__container container">
        <div className="catalog__content">
          <div className="catalog__breadCrumbs">
            <BreadCrumbs />
          </div>
          {resetState ? (
            <div className="catalog__reset">
              <button
                onClick={() => {
                  setSort({
                    min: 0,
                    max: 40000,
                    size: [],
                    sortMaxMin: '',
                  });
                  resetFunction();
                }}
              >
                Сброс
              </button>
            </div>
          ) : (
            <></>
          )}

          <div className="catalog__body">
            <div className="catalog__filter">
              <FilterComponent
                title={'Главная'}
                menu={filter}
                onClick={filterOnClick}
              />
            </div>
            <div className="catalog__view">
              <div className="catalog__sort">
                <SortComponent
                  state={sort}
                  setState={setSort}
                  buttonFunction={sortOnClick}
                />
              </div>
              <div className="catalog__producs">
                {spinerActive ? (
                  <>
                    <SpinerCustome />
                  </>
                ) : (
                  <>
                    <div className="top">
                      <ListProduct data={data} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
