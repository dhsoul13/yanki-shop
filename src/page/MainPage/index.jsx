import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../component/common/Footer';
import Header from '../../component/common/header';

const MainPage = () => {
  const location = useLocation();

  return (
    <div>
      {/* <div style={{ backgroundColor: 'brown' }}>
        <Header location={location.pathname} />
      </div> */}
      <div className="m12">1 sdfsfsaf</div>

      <Footer />
    </div>
  );
};

export default MainPage;
