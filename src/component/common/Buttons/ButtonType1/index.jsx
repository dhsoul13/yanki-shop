import React from 'react';
import ArrowFromSlider from '../../../../assets/svg/arrowFromSlider';

const ButtonTypeOne = ({ text, fun }) => {
  return (
    <>
      <button
        className="button-type-one"
        type="button"
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
