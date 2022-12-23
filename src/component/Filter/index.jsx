import React from 'react';

const FilterComponent = ({ title, menu = [], onClick }) => {
  return (
    <div className="filter">
      <h3 className="filter__title">{title}</h3>
      <ul className="filter__menu">
        {menu.map((el) => (
          <li
            className="filter__elem"
            key={el.id}
          >
            <button
              onClick={() => {
                onClick(el.type);
              }}
            >
              {el.view}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
