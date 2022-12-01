import React from 'react';

const SearchInput = ({ className }) => {
  return (
    <div className={`${className}__serch-input-container search-el`}>
      <input
        type={'text'}
        className={`search-el__input`}
      />
    </div>
  );
};

export default SearchInput;
