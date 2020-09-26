import React, { useState } from 'react';
import { useFetchTabs } from './../../hooks'

import loader from '../../assets/images/loader.png';

interface Tab {
  item: {
    title: string
    content: string
  }
}

function Tabs () {
  const [current, setCurrent] = useState('tab1');
  const {data, status} = useFetchTabs<Tab>(current);

  return (
    <div className="tabs grid grid-col-12 grid-row-5">
      <div className={"col-left-4 row-span-1 option tab1" + (current === 'tab1' ? " option--active" : '')} 
        onClick={()=>setCurrent('tab1')}>
        Vestibulum at odio sit amet <span className="fa fa-chevron-up"> </span>
      </div>
      <div className={"col-left-4 row-span-1 option tab2" + (current === 'tab2' ? " option--active" : '')} 
        onClick={()=>setCurrent('tab2')}>
        Sed vehicula neque <span className="fa fa-chevron-up"> </span>
      </div>
      <div className={"col-left-4 row-span-1 option tab3" + (current === 'tab3' ? " option--active" : '')} 
        onClick={()=>setCurrent('tab3')}>
        Nulla id libero pretium <span className="fa fa-chevron-up"> </span>
      </div>
      <div className="tabs_contnet row-span-end col-span-8 grid grid-col-8"
        style={{order: +current.replace('tab', '')}}>
        {status === "fetching"
          ? (<div className="contnet_loader">
              <img className="loader spin" src={loader} alt=""/>
            </div>)
          : <p className="contnet_text fadeIn"> {data?.item.content} </p> 
        }
      </div>
    </div>
  )
} 

export default Tabs;