import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AlertCustome from '../../component/common/Alert';
import ButtonTypeOne from '../../component/common/Buttons/ButtonType1';
import ButtonTypeTwo from '../../component/common/Buttons/ButtonType2';
import InputTypeOne from '../../component/common/Inputs/InputTypeOne';
import Layout from '../../component/common/Layout';
import SliderMain from '../../component/SliderMain';
import { product } from '../../helpers/content';
import { Validate } from '../../utils/validate';

const MainPage = () => {
  const location = useLocation();

  ///Для alert
  const [activeError, setActiveError] = useState(false);

  const showAlert = ({ status, text }) => {
    setActiveError(true);
  };

  //Для form

  const [result, setResult] = useState({});
  const [text, setText] = useState('');

  return (
    <>
      <div className="main-page">
        <AlertCustome
          setState={setActiveError}
          state={activeError}
          title={result?.messange}
          status={result?.status}
        />
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
                      try {
                        showAlert({});

                        setResult(
                          Validate.isCheckEmail(
                            e.target.elements['email'].value
                          )
                        );

                        setText('');
                      } catch (e) {
                        setResult(e.value);
                        console.error(e, e.value);

                        setText('');
                      }
                      e.preventDefault();
                    }}
                    action=""
                  >
                    <div className="section-three__input">
                      <InputTypeOne
                        type={'text'}
                        plaseholder="Введите текст"
                        id="email"
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                    </div>
                    <div className="section-three__button">
                      <ButtonTypeTwo
                        text={'Подписаться'}
                        type={'submit'}
                      />
                    </div>
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
