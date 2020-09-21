import React from 'react';
import Slider from '../../components/slider';
import Cards from '../../components/cards';
import Banners from '../../components/banners';
import Tabs from '../../components/tabs';

function Main () {
  return (
    <div className="main">
      <Slider/>
      <Cards/>
      <Banners/>
      <Tabs/>
    </div>
  );
}

export default Main;