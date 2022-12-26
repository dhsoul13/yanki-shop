import { useState } from 'react';

export const useAlert = () => {
  const [state, setState] = useState(false);
  const [result, setResult] = useState({
    messange: 'Нет сообщения',
    status: '',
  });

  const changeResult = ({ text = 'Успешно', status = '' }) => {
    setResult({
      messange: text,
      status,
    });
  };

  return {
    alert: state,
    setAlert: setState,
    result: result,
    changeResult: changeResult,
  };
};
