import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IinitialState, removeDocument } from '../store/Api'
import Column from '../components/Column'
import Row from '../components/Row'
import DownloadButton from '../components/DownnloadButton'
import { RisultatoI, RisultatoItemI } from '../components/Stepper'

export default function CheckDocumento() {


const documento =useSelector((state:IinitialState)=>state.documneto)
const [Valid, setValid] = useState<boolean>(false)
const Dispatch= useDispatch();

useEffect(() => {
        if(documento){
            console.log(documento)
            setValid(true)
            
          
          //  Dispatch(removeDocument())
        }
}, [])

const insertDownload=()=>   {


if(documento && documento.documneto)
documento.documneto[0].answer.forEach(item=>{
    const isFile=item.dati.find(item=>item.inputType==="file")
    if(isFile && isFile.risultato){
  const dataResuorce= isFile.risultato as RisultatoItemI
      if(dataResuorce)
      {
        return <><DownloadButton data={dataResuorce.data} name={dataResuorce.name} /></>
      }

}

  })
return <></>
  
 }






  return (
   <>
   
   {Valid?(<>
   <Row >
    <Column height={"500px"} width={null}>
    
    <h2>
    Documento mandato! 

    {documento && documento.documneto && documento.documneto[0] && documento.documneto[0].answer && documento.documneto[0].answer.map((item)=>(<>
     { item.text}
     {item.dati?.map((itemDati)=>(<>
     
     {itemDati.datorichiesto}
     { itemDati.risultato as {data:string, name:string} ?<>
     <DownloadButton 
      data={(itemDati.risultato as {data:string, name:string}).data} 
      name={(itemDati.risultato as {data:string, name:string}).name}    /></>:""}
     
     
     </>))}
    
    </>)
     
    )}


   </h2>
   
    </Column>


   </Row>

   
  
   
   
   </>):(<>


    <Row >
    <Column height={"500px"} width={null}>
    

    <h2>Non Hai compilato il Documento</h2>

  
    </Column>


   </Row>



   </>)}
   
   
   
   </>
  )
}