import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import Step from './Step';
import Row from './Row';
import { error } from 'console';
import { useDispatch } from 'react-redux';
import { setDocument } from '../store/Api';
import { useNavigate } from 'react-router-dom';
import { jsonnfile } from '../store/fileConvert';
import { test } from 'node:test';
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
  name:string, data:string, dataisFile?:boolean
}


export interface Answer{
  text:String,
  img:string,
  checked?:boolean,
  checkedHidden?:boolean,
  input?:boolean,
  select?:boolean,
  inputSelect?:boolean

  dati:{
    index:number;
    datorichiesto:string,
      inputType:string
    inputLabel:string,
    selectItems:{option:string,inputType?:string,
    inputLabel?:string,
  
    datorichiesto?:string,}[],
     risultato:string|File|number |undefined | RisultatoItemI
    }[];
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
        }/*
          const regexp = new RegExp('(?:\w*.?pec(?:.?\w+)*)');//PEC
          if((item.risultato as RisultatoItemI) && (item.risultato as RisultatoItemI).data){
          var test:boolean = regexp.test((item.risultato as RisultatoItemI).data);

          if(item.datorichiesto==="PEC" && test===false){
            count= count-1;
             }}

          //codice fiscale
            const regex2 =new RegExp('^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$', 'i');;
            if((item.risultato as RisultatoItemI) &&(item.risultato as RisultatoItemI).data){
             var test2:boolean = regex2.test((item.risultato as RisultatoItemI).data);

             if(item.datorichiesto==="Codice fiscale" && test2===false){
              count= count-1;
               }}  

               //email
               const regex3 =new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
               if((item.risultato as RisultatoItemI)&&(item.risultato as RisultatoItemI).data){
               var test3:boolean = regex3.test((item.risultato as RisultatoItemI).data);
  
               if(item.datorichiesto==="Email" && test3===false){
                count= count-1;
                 }  
                }

                 //telefono

                 const regex4 =new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
                 if((item.risultato as RisultatoItemI) &&(item.risultato as RisultatoItemI).data){
                                var test4:boolean = regex4.test((item.risultato as RisultatoItemI).data );
                   console.log(test4)
                                if(item.datorichiesto==="telefono" && test4===false){
                                 count= count-1;
                  }  }
                   
                 const regex5 =new RegExp("(IT)?[0-9]{11} |");
                 if((item.risultato as RisultatoItemI) && (item.risultato as RisultatoItemI).data){
                 var test5:boolean = regex5.test((item.risultato as RisultatoItemI).data);
                  
                 if(item.datorichiesto==="P.IVA" && test5===false){
                  count= count-1;
                 }}
        




      
     
                */

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
          !step[currentSlide].answer.find((i)=>i.checked===true) ||
          (step[currentSlide].answer.find((i)=>i.checked===true)?.input===undefined &&
         step[currentSlide].answer.filter((i)=>i.checked===true).length>1 )
          || (step[currentSlide].answer.find((i)=>i.checked===true)?.input===true && checkRisposte(step[currentSlide].answer.find((i)=>i.checked===true) )))){
       alert("Seleziona solo una risposta")
       
        }else{
          console.log("ciao");
          setcurrentSlide(currentSlide+1)
          step[currentSlide].answer=steps[currentSlide].answer.filter(Item=>Item["checked"]===true)
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
<div className='slider' style={{width:width, height:"100%",padding:"20px 0px"}} ref={refSlider}>
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
