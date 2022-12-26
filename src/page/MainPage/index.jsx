import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AlertCustome from '../../component/common/Alert';
import ButtonTypeOne from '../../component/common/Buttons/ButtonType1';
import ButtonTypeTwo from '../../component/common/Buttons/ButtonType2';
import InputTypeOne from '../../component/common/Inputs/InputTypeOne';
import Layout from '../../component/common/Layout';
import FormSubscription from '../../component/FormSubscription';
import SliderMain from '../../component/SliderMain';
import { product } from '../../helpers/content';

const MainPage = ({ value, valueChange, onSubmit, alert }) => {
  return (
    <>
      <div className="main-page">
        <AlertCustome alert={alert} />
        <div className="main__section-one section-one section">
          <div className="container">
            <div className="section-one__content ">
              <h1 className="section-one__title  main-title">
                Новая коллекция
              </h1>
              <span className="section-one__line"></span>
              <div className="section-one__button">
                {<ButtonTypeOne text={'Смотреть Новинки'} />}
              </div>
            </div>
          </div>
        </div>
        <div className="main__section-two section-two section">
          <div className="section-two__container container">
            <div className="section-two__content ">
              <h2 className="section-two__title common-title">Категория</h2>
              <div className="section-two__product">
                <SliderMain />
              </div>
            </div>
          </div>
        </div>
        <div className="main__section-three section">
          <FormSubscription
            value={value}
            valueChange={valueChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
