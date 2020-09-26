import React, { useState, useRef, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/images/logo-playground-white.png';

function Header () {
  const [pageScroll, setPageScroll] = useState(false);
  const navRef = useRef<Boolean>();
  
  navRef.current = pageScroll
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100
      if (navRef.current !== show) {
        setPageScroll(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={pageScroll ? "navbar navbar--scroll" : "navbar"}>
      <div className="navbar_logo">
        <img src={logo} alt="Playground logo"/>
      </div>
      <div className="navbar_menu">
        <AnchorLink offset='70' href="#we-are" className="menu_item">we are</AnchorLink>
        <AnchorLink offset='70' href="#we-do" className="menu_item">we do</AnchorLink>
        <AnchorLink offset='70' href="#careers" className="menu_item">careers</AnchorLink>
        <AnchorLink offset='70' href="#contact-us" className="menu_item">contact us</AnchorLink>
      </div>
    </div>
  );
}

export default Header