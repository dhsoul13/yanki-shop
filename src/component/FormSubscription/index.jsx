import React from 'react';
import ButtonTypeTwo from '../common/Buttons/ButtonType2';
import InputTypeOne from '../common/Inputs/InputTypeOne';

const FormSubscription = ({
  value = '',
  valueChange = () => {},
  onSubmit = () => {},
}) => {
  return (
    <div className="formSubscription__content ">
      <div className="formSubscription__form">
        <h2 className="formSubscription__title common-title">
          Узнайте первым о новинках
        </h2>
        <div className="formSubscription__product">
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
            action=""
          >
            <div className="formSubscription__input">
              <InputTypeOne
                type={'text'}
                plaseholder="Введите текст"
                id="email"
                value={value}
                onChange={valueChange}
              />
            </div>
            <div className="formSubscription__button">
              <ButtonTypeTwo
                text={'Подписаться'}
                type={'submit'}
              />
            </div>
          </form>
          <p className="formSubscription__info">
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
            персональных данных и ознакомлен(а) с условиями конфиденциальности.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSubscription;

//   try {
//     showAlert({});

//     setResult(
//       Validate.isCheckEmail(e.target.elements['email'].value)
//     );

//     setText('');
//   } catch (e) {
//     setResult(e.value);
//     console.error(e, e.value);

//     setText('');
//   }
//   e.preventDefault();
