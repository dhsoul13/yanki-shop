import React from 'react';
import ArrowFromSlider from '../../../../assets/svg/arrowFromSlider';

const ButtonTypeOne = ({ text, fun, style = {} }) => {
  return (
    <>
      <button
        className="button-type-one"
        type="button"
        style={{ ...style }}
        onClick={fun}
      >
        {text}
        <div>
          <ArrowFromSlider />
        </div>
      </button>
    </>
  );
};

export default ButtonTypeOne;
