import React, { FC, useCallback, useState } from 'react'
import { Answer, RisultatoI, StepI } from './Stepper'
import Row from './Row'
import Column from './Column'
import InputBox from './InputBox'
import { jsonnfile } from '../store/fileConvert'

const Step:FC<StepI>=({domanda, answer,visible,setStep, steps, index})=> {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = async(indexAnswer:number,indexS:number , file:File|undefined|string|number) => {
      const stepsT=[...steps]
      stepsT[indexS].answer[indexAnswer].dati?.forEach(async item=>{
        const risultatoFile=file as File;
        console.log(file);
        if(risultatoFile){

          var risultatoJsonFile=await jsonnfile(risultatoFile);
          
        console.log(risultatoJsonFile);

        if(risultatoJsonFile){
          var v:{data:string,name:string}={data:"", name:""};
          v.data=risultatoJsonFile as string;
          v.name=risultatoFile.name;
          item.risultato= v;};
        
        }else if(!file as boolean){

          item.risultato= file;


        }
        
        
 

      }) ;
     
      if(file===undefined){   
        setIsChecked(!isChecked);  stepsT[indexS].answer[indexAnswer]["checked"]=isChecked;
        stepsT[indexS].answer=stepsT[indexS].answer.filter(Item=>Item["checked"]===true)
      }
     
    setStep(stepsT);
   
    console.log(steps)

    }


    const setInput=(indexA:number)=>{


      if( steps[index].answer[indexA] && steps[index].answer[indexA].checked &&
         steps[index].answer[indexA].input &&    
          steps[index].answer[indexA].dati 
         ){


            return (<>
            
           { steps[index].answer[indexA].dati?.map((itemF)=>(<>
           
           
         

            {itemF.inputType==="file" &&  <input type={itemF.inputType as string}  checked={steps[index].answer[indexA].checked} onChange={(item:any)=>{handleOnChange(indexA,index,item.target.files[0] as File)}}/>}
            {itemF.inputType!=="file" &&  <input type={itemF.inputType as string}  checked={steps[index].answer[indexA].checked} onChange={(item:any)=>{handleOnChange(indexA,index,item.target.value)}}/>}
           </>))
        
              
           }
              
              </>)

      }
    }

  



  return (
    <div className='domandaItem'  >
      <h3 style={{textAlign:"center"}}>{domanda}</h3>
      <div style={{display:"flex" , width:"100%"}}>
        {answer.map((item, indexA)=>(<>
          <Column height={"400px"} width={"50%"} >
            <div style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
           
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.38)"

            }}>
            <div>
              <img src={item.img} alt={`step ${indexA}`} style={{width:"100%"}}/>
            </div>
            <div>
              <h4>{item.text}</h4>
            </div>
            <input type='checkbox' checked={steps[index].answer[indexA].checked} onChange={()=>{handleOnChange(indexA,index,undefined)}}/>
v          {setInput(indexA)}
            </div>
          </Column>
        
        </>))}
      </div>


    </div>
  )
}

export default Step
