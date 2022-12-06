import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../component/common/Layout';

const MainPage = () => {
  const location = useLocation();

  return (
    <>
      <Layout>
        <div className="main">
          <div className="main__section-one section">
            <div className="section-one main__content">
              <h1 className="section-one__title main__title">
                Новая коллекция
              </h1>
              <span className="section-one__line main__line"></span>
              <button>Смотреть более</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MainPage;
