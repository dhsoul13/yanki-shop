import React from 'react';
import Footer from '../Footer';
import Header from '../header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">{children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
