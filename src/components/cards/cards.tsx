import React from 'react';

import innovationImg from '../../assets/images/card-innovation.png';
import playHarderImg from '../../assets/images/card-play-harder.png';
import simplicityImg from '../../assets/images/card-simplicity.png';

const innovationCnt = "Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.";
const playHarderCnt = "Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.";
const simplicityCnt = "Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.";

function Cards () {
  return (
    <div className="grid grid-row grid-col-12 cards">
      <Card image={playHarderImg} content={innovationCnt} num="1"/>
      <Card image={simplicityImg} content={playHarderCnt} num="2"/>
      <Card image={innovationImg} content={simplicityCnt} num="3"/>
    </div>
  )
} 

type CardProps = {
  image: string,
  content?: string,
  num: string,
  callback?: Function
}

function Card ({ image, content, num }:CardProps) {
  return (
    <div className={`col-span-4 card card--${num}`}>
      <div className="card_image" style={{backgroundImage: `url(${image})`}}></div>
      <div className="card_conntent">
        <p>{content}</p>
      </div>
      <button className="card_button btn_primary--dark">
        read more
      </button>
    </div>
  );
}

export default Cards