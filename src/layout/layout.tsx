import React from 'react';
import Header from './header';
import Cookies from './cookies';
import Footer from './footer';


function Layout () {
  return (
    <div className="layout">
      <Header/>
      <Cookies/>
      <Footer/>
    </div>
  );
}

export default Layout;
