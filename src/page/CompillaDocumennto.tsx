import React, { useMemo } from 'react'
import Stepper, { StepI, StepIM } from '../components/Stepper'
import chisiamoImg from './../road220058.jpeg'

export default function CompillaDocumennto() {


const mockData:StepIM[]=[
    {
    domanda:"NUOVA APE O RINNOVO?",
    answer:[
                {
                text:"Prima ape",
                img:`${chisiamoImg}`,
                checked:false,
            },
            {
                text:"Rinnovo ape (scaduta)",
                img:`${chisiamoImg}`,
                checked:false,
                input:true,
                dati:[
                    {
                        inputType:"file",
                        inputLabel:"APE scaduta",
                        datorichiesto:"APE scaduta",
                        risultato:undefined
                    }
                ]
                
            },

        
         
        ],
    complete:false, 

},

{
    domanda:"POSIZIONE DELL’IMMOBILE DA CERTIFICARE: LOCALITA’ LOMBARDIA",
    answer:[
                {
                text:"Milano città",
                img:`${chisiamoImg}`,
                checked:false,
            },
            {
                text:"Provincia di Milano",
                img:`${chisiamoImg}`,
                checked:false,
            },
         
        ],
    complete:false, 

},
{
    domanda:"RICHIEDI LA PRATICA COME PRIVATO O COME AZIENDA?",
    answer:[
                {
                text:"Richiedo e pago la pratica come privato",
                img:`${chisiamoImg}`,
                checked:false,
                input:true,
                dati:[
                    {
                        inputType:"text",
                        inputLabel:"name",
                        datorichiesto:"Nome",
                        risultato:undefined
                    },
                    {
                        inputType:"text",
                        inputLabel:"Cognome",
                        datorichiesto:"Cognome",
                        risultato:undefined
                    },
                    {
                        inputType:"text",
                        inputLabel:"Indirizzo sede legale dell’azienda o della P.IVA",
                        datorichiesto:"Indirizzo sede legale dell’azienda o della P.IVA",
                        risultato:undefined
                    },
                    {
                        inputType:"text",
                        inputLabel:"Telefono",
                        datorichiesto:"Telefono",
                        risultato:undefined
                    },
               
                    {
                        inputType:"email",
                        inputLabel:"PEC",
                        datorichiesto:"Pec",
                        risultato:undefined
                    },   
                      {
                        inputType:"text",
                        inputLabel:"Cap Azienda o P.IVA",
                        datorichiesto:"Cap Azienda o P.IVA",
                        risultato:undefined
                    },
                    {
                        inputType:"text",
                        inputLabel:"Codice destinatario",
                        datorichiesto:"Codice destinatario",
                        risultato:undefined
                    }
                ]
            },
            {
                text:"Richiedo e pago la pratica come P.IVA",
                img:`${chisiamoImg}`,
                checked:false,
            },

            {
                text:"forse",
                img:`${chisiamoImg}`,
                checked:false,
            }
         
        ],
    complete:false, 

},
{
    domanda:"hai l'uccello grande?",
    answer:[
                {
                text:"si",
                img:`${chisiamoImg}`,
                checked:false,
            },
            {
                text:"no",
                img:`${chisiamoImg}`,
                checked:false,
            },

            {
                text:"forse",
                img:`${chisiamoImg}`,
                checked:false,
            }
         
        ],
    complete:false, 

},    {
    domanda:"hai l'uccello grande?",
    answer:[
                {
                text:"si",
                img:`${chisiamoImg}`,
                checked:false,
            },
            {
                text:"no",
                img:`${chisiamoImg}`,
                checked:false,
            },

            {
                text:"forse",
                img:`${chisiamoImg}`,
                checked:false,
            }
         
        ],
    complete:false, 

}


]



const [width, setWidth] = React.useState(window.innerWidth);

const widhtWindow=useMemo(() => {
 
window.addEventListener("resize", () => setWidth(window.innerWidth));
return width

  }, [width]);



  return (
    <>
    
    
    <Stepper
    steps={mockData}
    windowWidth={widhtWindow}
    
    
    />
    
    
    
    
    </>
  )
}
