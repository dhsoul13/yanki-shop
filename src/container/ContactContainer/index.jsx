import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useAlert } from '../../hooks/useAlert';
import { useInput } from '../../hooks/useInput';
import ContactPage from '../../page/ContactPage';
import { Validate } from '../../utils/validate';

const ContactContainer = () => {
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

  useEffect(() => {
    console.log(valueForm);
  }, [valueForm]);

  return (
    <>
      <ContactPage
        value={value}
        valueChange={valueChange}
        onSubmit={onChange}
        alert={alert}
      />
    </>
  );
};

export default ContactContainer;
