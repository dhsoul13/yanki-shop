import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../../page/ErrorPage';

const effectBackToMain = (callback) => {
  return setTimeout(callback, 30000);
};

const ErrorContainer = () => {
  const navigate = useNavigate();
  ///Для перехода на главную страницу

  const handlerGoBackMainPage = useCallback(() => {
    navigate('/');
  }, []);

  /// Функция перехода автоматического перехода на главную страницу

  useEffect(() => {
    const timer = effectBackToMain(() => {
      navigate('/');
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <ErrorPage goBackMainPageFunction={handlerGoBackMainPage} />
    </>
  );
};

export default ErrorContainer;
