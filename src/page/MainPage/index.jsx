import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonTypeOne from '../../component/common/Buttons/ButtonType1';
import ButtonTypeTwo from '../../component/common/Buttons/ButtonType2';
import InputTypeOne from '../../component/common/Inputs/InputTypeOne';
import Layout from '../../component/common/Layout';
import SliderMain from '../../component/SliderMain';
import { product } from '../../helpers/content';

const MainPage = () => {
  const location = useLocation();

  return (
    <>
      <div className="main-page">
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

        <div className="main__section-three section-three section">
          <div className="section-three__container container">
            <div className="section-three__content ">
              <div className="section-three__form">
                <h2 className="section-three__title common-title">
                  Узнайте первым о новинках
                </h2>
                <div className="section-three__product">
                  <form
                    onSubmit={(e) => {
                      alert(e.target.elements['email'].value);

                      e.preventDefault();
                    }}
                    action=""
                  >
                    <InputTypeOne
                      type={'text'}
                      plaseholder="Введите текст"
                      id="email"
                    />
                    <ButtonTypeTwo
                      text={'Подписаться'}
                      type={'submit'}
                    />
                  </form>
                  <p className="section-three__info">
                    Нажимая на кнопку «Подписаться», я соглашаюсь на обработку
                    моих персональных данных и ознакомлен(а) с условиями
                    конфиденциальности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
