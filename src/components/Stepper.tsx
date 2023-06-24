import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import Step from './Step';
import Row from './Row';
import { error } from 'console';
import { useDispatch } from 'react-redux';
import { setDocument } from '../store/Api';
import { useNavigate } from 'react-router-dom';
import { jsonnfile } from '../store/fileConvert';
export interface StepperI{
  steps:StepIM[];
  windowWidth:number;

}
export interface StepIM{
      domanda:String,
      answer:Answer[]
      complete:boolean
      visible?:boolean
    
}
export interface DocumentI{
  documneto:StepIM[]

}
export interface FascicoloI{
  documenti:DocumentI[]

}

export interface StepI{
  domanda:String,
  answer:Answer[]
  complete:boolean
  visible?:boolean
  setStep:(value: React.SetStateAction<StepIM[]>) => void,
  steps: StepIM[],
  index:number
}

export interface RisultatoI{
  datorichiesto:string,  inputType:string
    inputLabel:string,
     risultato:string|number|File|undefined | RisultatoItemI;
}

export interface RisultatoItemI{
  name:string, data:string
}


export interface Answer{
  text:String,
  img:string,
  checked:boolean,
  input?:boolean,

  dati?:{datorichiesto:string,  inputType:string
    inputLabel:string, risultato:string|File|number |undefined | RisultatoItemI}[];
}
 const Stepper:FC<StepperI>=({steps, windowWidth})=> {
 const Dispatch=useDispatch()
 const Navigate= useNavigate();

  const refSlider=useRef<HTMLDivElement| null>(null);
  const [currentSlide, setcurrentSlide] = useState<number>(0)
  const [idFirst, setIsFirst] = useState<boolean>(false)
  const [step, setstep] = useState<StepIM[]>(steps)
  
  
  const checkCheckbox:(answer: Answer[]) => boolean=(answer:Answer[])=>{

     let count=0;
 
    answer.forEach((item)=>{
      if(item.checked){
        count=count+1;
      }


    });
    console.log(count);
    if(count===1){
     
      return false
    }else{
   
    return true;
  }
  }
  
  
 const stepR =useMemo(() => {
  



 
 console.log(step)
  

  if(refSlider.current ){
  refSlider.current.style.marginLeft=`-${windowWidth*currentSlide}px`
 }
    
   
 
   
  

return step
  
  }, [currentSlide])





  
  
  
  const leftHanndler=()=>{
  
    if(refSlider && refSlider.current){
      if(currentSlide>0 && currentSlide!==0){
        console.log(step[currentSlide].answer.filter((i)=>i.checked===true).length)
      
          console.log("ciao");
        step[currentSlide].complete=false;
        setstep(step);
        setcurrentSlide(currentSlide-1)
        
        
        }else{
        
    
       
        }
    
       
    }
  
  }

  const checkRisposte=(answers:Answer|undefined)=>{
    console.log(answers)
    if(answers && answers.dati){
      if(answers.input===false){
          return true;
      }
      var count=0;

      answers.dati &&  answers.dati.forEach((item=>{
        console.log(item.risultato)
        if(item.risultato){
          count= count+1;
        }


      }))
      console.log(count,answers.dati && answers.dati.length )
      if( count===answers.dati.length){
          return false
      }

      return true
    }else{
      return true
    }

  }



// Leggi il file dal tuo input file


// Crea un oggetto FileReader per leggere il contenuto del file














  
  const rightHanndler=()=>{
  
    if(refSlider && refSlider.current){
      console.log("ciao1")
      if(currentSlide<steps.length-1){
        console.log(checkRisposte(step[currentSlide].answer.find((i)=>i.checked===true)))
        if((
          step[currentSlide].answer.find((i)=>i.checked===true)?.input===false &&
         (step[currentSlide].answer.filter((i)=>i.checked===true).length>1 || step[currentSlide].answer.filter((i)=>i.checked===true).length===0)) ||(step[currentSlide].answer.find((i)=>i.checked===true)?.input===true && checkRisposte(step[currentSlide].answer.find((i)=>i.checked===true)))){
       alert("Seleziona solo una risposta")
       
        }else{
          console.log("ciao");
          setcurrentSlide(currentSlide+1)
        step[currentSlide].complete=true
        }
        
        }else{
          setcurrentSlide(1)
        
    
        }
  
  
       
    }
  
  }


  const completeDocumento=()=>{
    console.log(step)
    if(step[currentSlide].answer.filter((i)=>i.checked===true).length>1 || step[currentSlide].answer.filter((i)=>i.checked===true).length===0){
      alert("Seleziona solo una risposta")
       
    }else{
    
      step[currentSlide].complete=true
 
    Navigate("/SendDocumenti")
    console.log('docuemnto in stepper: ', step);
  Dispatch(setDocument(step))
    console.log(step)
  }
  
  }
  
  
  
  const width:number=steps.length*windowWidth;
  







  return (
<>
<h3 style={{textAlign:"center", marginBottom:"100px"}}>Compila il tuo documento</h3>
<Row>
{steps.map((item, index)=>(

<div className={`circle  ${item.complete?"circle-active":""}`} style={currentSlide===index?{transform:"translateY(-50px)"}:{}}>

{index+1}

</div>


))}
</Row>
<div style={{overflow:"hidden", position:"relative"}}>
<div className='slider' style={{width:width}} ref={refSlider}>
{stepR.map((item, index)=>(




  <>




<>

</>
<div style={{width:windowWidth}}>
   
   
  <Step
    domanda={item.domanda}
    answer={item.answer}
    complete={false}
    visible={index===0?true:false}
    setStep={setstep}
    steps={step}
    index={index}
  />
  </div>

  </>
))}
    </div>
    </div>

  <Row>
    <button className='leftbuttonStepper' disabled={currentSlide===0} onClick={()=>leftHanndler()}>Precedente Domanda</button>
    <button className='rightbuttonStepper' disabled={currentSlide===step.length-1}  onClick={()=>rightHanndler()}> Prossima Domanda</button>
    <button className='complete' disabled={currentSlide!==step.length-1}  onClick={()=>completeDocumento()}> Invia il documento</button>
  </Row>

    </> )
  
}

export default Stepper;
