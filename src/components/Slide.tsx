import React, { FC } from 'react'
import { SlideI } from './Slider';

 const Slide:FC<SlideI>=({
  titleS,
  descrione,
  img,
  height
 }) =>{
  return (
    <div className='Slide' style={{backgroundImage:`url(${img})`, height:`${height}`, width:'100%'}}>
      <div className='Slide' style={{background:"#fff", borderRadius:"2%",boxShadow:" 5px 5px 15px 5px rgba(0,0,0,0.38);",padding:"25px"}}>
      <h2>{titleS}</h2>
      <h5 style={{width:"400px"}}>{descrione}</h5>
      </div>

    </div>
  )
}

export default Slide;
