import React, { FC, useEffect, useRef, useState } from 'react'
import Slide from './Slide';
import { relative } from 'path';

export interface SlideI{
  titleS:String,
  descrione:String,
  img:String,
  height:String,
};

export interface SliderI{
  slides:SlideI[];
  title:String|null,
  descrione:String|null,
  windowWidth:number
}




 const Slider:FC<SliderI>=({slides, title, descrione, windowWidth})=> {

const refSlider=useRef<HTMLDivElement| null>(null);
const [currentSlide, setcurrentSlide] = useState<number>(0)





useEffect(() => {
if(refSlider.current)
 refSlider.current.style.marginLeft=`-${windowWidth*currentSlide}px`


}, [currentSlide])



const leftHanndler=()=>{

  if(refSlider && refSlider.current){
    if(currentSlide>0 && currentSlide!==0){
  
      setcurrentSlide(currentSlide-1)
  
       
      }else{
        setcurrentSlide(slides.length-1)
  
     
      }
  
      
  }

}

const rightHanndler=()=>{

  if(refSlider && refSlider.current){
    console.log("ciao1")
    if(currentSlide<slides.length-1){
  

      setcurrentSlide(currentSlide+1)
  
        
      
      }else{
        setcurrentSlide(1)
      
  
      }

     
  }

}



const width:number=slides.length*windowWidth;


  return (<>    
  
    {title && (<h1>{title}</h1>)}
    {descrione && (<p>{descrione}</p>)}
    <div style={{overflow:"hidden", position:"relative"}}>
    <div className='slider' style={{width:width}} ref={refSlider}>

      {slides.map((item:SlideI)=>(
        <>
        <Slide
       titleS={item.titleS}
        img={item.img}
        descrione={item.descrione}
        height={'550px'}
        />
        
        
        </>
      ))}






    </div>

<div className='leftButton' onClick={()=>leftHanndler()}>
{'<'}
</div>

<div className='rightButton' onClick={()=>rightHanndler()}>
{'>'}
</div>
    </div>
    </>

  )
}

export default Slider
