import React, { FC, useCallback, useState } from 'react'
import { Answer, RisultatoI, StepI } from './Stepper'
import Row from './Row'
import Column from './Column'
import InputBox from './InputBox'
import { jsonnfile } from '../store/fileConvert'
import Select from './Select'

const Step:FC<StepI>=({domanda, answer,visible,setStep, steps, index})=> {
  const [isChecked, setIsChecked] = useState(false);

  const hadlecheck=(indexAnswer:number,indexS:number)=>{
    const stepsT=[...steps]
  
      setIsChecked(!isChecked);  stepsT[indexS].answer[indexAnswer]["checked"]=isChecked;
   
  }
  const handleOnChange = async(indexAnswer:number,indexS:number,indexD:number , file:File|undefined|string|number) => {
  





  console.log("change")
 
      const stepsT=[...steps]
   
   

        
    
    
        const risultatoFile=file as File;
        console.log(file);
 
     

   

          var risultatoJsonFile=risultatoFile instanceof File? await jsonnfile(risultatoFile):file;
          
        console.log(risultatoJsonFile);

        if(risultatoJsonFile && risultatoJsonFile as string  ){
          var v:{data:string,name:string}={data:"", name:""};
          v.data=risultatoJsonFile as string;
          v.name=risultatoFile as File ? risultatoFile.name :stepsT[indexS].answer[indexAnswer].dati[indexD].datorichiesto;
          stepsT[indexS].answer[indexAnswer].dati[indexD-1]['risultato']=v;
        
        }
        

   
     
       
     
  
     
    setStep(stepsT);
   
    console.log(steps)

    }


    const setInput=(indexA:number)=>{


      if( steps[index].answer[indexA] &&
         steps[index].answer[indexA].checked &&
          steps[index].answer[indexA].dati 
         ){

        
            return (<>
            
           { steps[index].answer[indexA].dati?.map((itemF)=>(<>
           

            <label style={{padding:"25px"}}>{itemF.datorichiesto}</label>
         
           {!steps[index].answer[indexA].input && steps[index].answer[indexA].select && itemF.selectItems && itemF.selectItems.length>0 &&  
           <Select onChange={(item)=>handleOnChange(indexA,index,itemF.index,item)} options={itemF.selectItems}  value={itemF.risultato} label={itemF.datorichiesto}/> }
         
         {steps[index].answer[indexA] && itemF.selectItems.length===0 && <input  type={itemF.inputType as string} min={1800} max={2023}  checked={steps[index].answer[indexA].checked} onChange={(item:any)=>{handleOnChange(indexA,index,itemF.index,item.target.value)}}/>}
            { steps[index].answer[indexA].select===false && steps[index].answer[indexA].input && itemF.inputType==="file" &&  <input type={itemF.inputType as string}  checked={steps[index].answer[indexA].checked} onChange={(item:any)=>{handleOnChange(indexA,index,itemF.index,item.target.files[0] as File)}}/>}
            { steps[index].answer[indexA].select===false && steps[index].answer[indexA].input && itemF.inputType!=="file" &&  <input  type={itemF.inputType as string}  checked={steps[index].answer[indexA].checked} onChange={(item:any)=>{handleOnChange(indexA,index,itemF.index,item.target.value)}}/>}
           
           </>))
        
              
           }
              
              </>)

      }
    }

  



  return (
    <div className='domandaItem'  >
      <h3 style={{textAlign:"center"}}>{domanda}</h3>
      <div style={{display:"flex" , width:"100%", alignItems:"center"}}>
        {answer.map((item, indexA)=>(<>
          <Column height={"100%"} width={"50%"} >
            <div style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              padding:"25px",
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.38)"

            }}>
            <div>
              <img src={item.img} alt={`step ${indexA}`} style={{width:"100%"}}/>
            </div>
            <div>
              <h4>{item.text}</h4>
            </div>
            <input 
            style={steps[index].answer[indexA].checkedHidden?{display:"none"}:{}}
             type='checkbox' checked={steps[index].answer[indexA].checked}
              onChange={()=>{hadlecheck(indexA,index)}}
              />
v          {setInput(indexA)}
            </div>
          </Column>
        
        </>))}
      </div>


    </div>
  )
}

export default Step
