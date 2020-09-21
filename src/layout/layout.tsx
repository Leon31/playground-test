import React from 'react';
import Header from './header';
import Cookies from './cookies';
import Footer from './footer';

import Main from '../pages/main';

function Layout () {
  return (
    <div className="layout">
      <Header/>
      <Main/>
      <Cookies/>
      <Footer/>
    </div>
  );
}

export default Layout;
