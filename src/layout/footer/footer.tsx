import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/images/logo-playground-secondary.png';

function Footer () {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} alt="Playground logo secondary"/>
      </div>
      <div className="footer_menu">
        <AnchorLink offset='70' href="#we-are" className="menu_item">we are</AnchorLink>
        <AnchorLink offset='70' href="#we-do" className="menu_item">we do</AnchorLink>
        <AnchorLink offset='70' href="#careers" className="menu_item">careers</AnchorLink>
        <AnchorLink offset='70' href="#contact-us" className="menu_item">contact us</AnchorLink>
      </div>
      <div className="footer_social">
        <span className="fab fa-facebook-square"> </span>
        <span className="fab fa-linkedin-in"> </span>
        <span className="fab fa-instagram"> </span>
      </div>
    </div>
  );
}

export default Footer