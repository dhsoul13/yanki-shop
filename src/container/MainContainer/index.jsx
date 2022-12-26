import React from 'react';
import { useState } from 'react';
import { useAlert } from '../../hooks/useAlert';
import { useInput } from '../../hooks/useInput';
import MainPage from '../../page/MainPage';
import { Validate } from '../../utils/validate';

const MainContainer = () => {
  const alert = useAlert();
  const { value, valueChange, reset } = useInput('');
  const [valueForm, setValueForm] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    try {
      const result = Validate.isCheckEmail(e.target.elements['email'].value);
      alert.changeResult({});
      alert.setAlert(true);
      setValueForm(result.value);
      reset();
    } catch (error) {
      alert.setAlert(true);
      alert.changeResult({
        status: error.value.status,
        text: error.value.messange,
      });
      reset();
    }
  };

  return (
    <>
      <MainPage
        alert={alert}
        value={value}
        valueChange={valueChange}
        onSubmit={onChange}
      />
    </>
  );
};

export default MainContainer;
