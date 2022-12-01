import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../component/common/header';

const MainPage = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <Header location={location.pathname} />
      </div>
      <div className="m12">1 sdfsfsaf</div>
    </div>
  );
};

export default MainPage;
