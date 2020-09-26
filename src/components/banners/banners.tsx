import React from 'react';

import weAreImg from '../../assets/images/banner-we-are.jpg';
import weDoImg from '../../assets/images/banner-we-do.jpg';
import carrersImg from '../../assets/images/banner-carrers.jpg';
import Revealer from '../../utils/revealer';

const desc = "Consectetur adipiscing elit. Nulla condimentum tortor sem.";

function Banners () {
  return (
    <div className="banners">
      <Banner image={weAreImg} title={"we are"} desc={desc} label={"the players"} theme="dark"/>
      <Banner image={weDoImg} title={"we do"} desc={desc} label={"the projects"} theme="light"/>
      <Banner image={carrersImg} title={"careers"} desc={desc} label={"the positions"} theme="dark"/>
    </div>
  )
} 

type BannerProps = {
  image: string,
  title: string,
  desc: string,
  theme: string,
  label: string,
  callback?: Function
} 

function Banner ({ image, title, desc, theme, label }:BannerProps) {

  return (
    <div className="banner grid grid-row grid-col-12" id={title.replace(/\s+/g, '-')}>
        <div className="banner_image-container col-span-7" >
          <Revealer revealIn="zoomImageIn" revealOut="zoomed">
            <div className="banner_image" style={{backgroundImage: `url(${image})`}}></div>
          </Revealer>
        </div>
          <div className="banner_detail col-span-5 grid grid-row grid-col-5">
            <Revealer revealIn="fadeInSide" revealOut="fadeOut">
              <div className="detail_content">
                <h1 className="content_title">{title}</h1>
                <p className="content_desc">
                {desc.split('.').map((line, i) => line && 
                  <span key={line + i}>{line}. <br/></span>
                )}
                </p>
                <button className={`btn_secondary--${theme} content_button`}>
                  {label} <span className="fa fa-chevron-right"> </span>
                </button>
              </div>
            </Revealer>
          </div>
      </div>
  );
}

export default Banners;