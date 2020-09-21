import React from 'react';
import Slider from '../../components/slider';
import Cards from '../../components/cards';
import Banners from '../../components/banners';

function Main () {
  return (
    <div className="main">
      <Slider/>
      <Cards/>
      <Banners/>
    </div>
  );
}

export default Main;