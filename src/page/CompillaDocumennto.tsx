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
                dati:[]
            },
            {
                text:"Rinnovo ape (scaduta)",
                img:`${chisiamoImg}`,
                checked:false,
                input:true,
                dati:[
                    {
                        index:1,
                        inputType:"file",
                        inputLabel:"APE scaduta",
                        datorichiesto:"APE scaduta",
                        risultato:undefined,
                        selectItems:[]
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
                dati:[]
            },
            {
                text:"Provincia di Milano",
                img:`${chisiamoImg}`,
                checked:false,
                dati:[]
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
                        index:1,
                        inputType:"text",
                        inputLabel:"name",
                        datorichiesto:"Nome",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:2,
                        inputType:"text",
                        inputLabel:"Cognome",
                        datorichiesto:"Cognome",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:3,
                        inputType:"text",
                        inputLabel:"Indirizzo sede legale dell’azienda o della P.IVA",
                        datorichiesto:"Indirizzo sede legale dell’azienda o della P.IVA",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:4,
                        inputType:"text",
                        inputLabel:"Telefono",
                        datorichiesto:"Telefono",
                        risultato:undefined,
                        selectItems:[]
                    },
               
                    {
                        index:5,
                        inputType:"email",
                        inputLabel:"PEC",
                        datorichiesto:"PEC",
                        risultato:undefined,
                        selectItems:[]
                    },   
                      {
                        index:6,
                        inputType:"text",
                        inputLabel:"Cap Azienda o P.IVA",
                        datorichiesto:"Cap Azienda o P.IVA",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:7,
                        inputType:"text",
                        inputLabel:"Codice destinatario",
                        datorichiesto:"Codice destinatario",
                        risultato:undefined,
                        selectItems:[]
                    }
                ]
            },
            {
                text:"Richiedo e pago la pratica come P.IVA",
                img:`${chisiamoImg}`,
                checked:false,
                dati:[
                    {
                        index:1,
                        inputType:"text",
                        inputLabel:"name",
                        datorichiesto:"Nome",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:2,
                        inputType:"text",
                        inputLabel:"Cognome",
                        datorichiesto:"Cognome",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:3,
                        inputType:"text",
                        inputLabel:"Indirizzo sede legale dell’azienda o della P.IVA",
                        datorichiesto:"Indirizzo sede legale dell’azienda o della P.IVA",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:4,
                        inputType:"text",
                        inputLabel:"Telefono",
                        datorichiesto:"Telefono",
                        risultato:undefined,
                        selectItems:[]
                    },
               
                    {
                        index:5,
                        inputType:"email",
                        inputLabel:"PEC",
                        datorichiesto:"PEC",
                        risultato:undefined,
                        selectItems:[]
                    },   
                      {
                        index:6,
                        inputType:"text",
                        inputLabel:"Cap Azienda o P.IVA",
                        datorichiesto:"Cap Azienda o P.IVA",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:7,
                        inputType:"text",
                        inputLabel:"Codice destinatario",
                        datorichiesto:"Codice destinatario",
                        risultato:undefined,
                        selectItems:[]
                    }
                ]
            },

     
         
        ],
    complete:false, 

},
{
    domanda:"DATI DEL PROPRIETARIO DELL’IMMOBILE ",
    answer:[
                {
                text:"DATI DEL PROPRIETARIO DELL’IMMOBILE",
                img:`${chisiamoImg}`,
                checked:true,
                checkedHidden:true,
                input:true,
                dati:[
                    {
                        index:1,
                        inputType:"text",
                        inputLabel:"name",
                        datorichiesto:"Nome",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:2,
                        inputType:"text",
                        inputLabel:"Cognome",
                        datorichiesto:"Cognome",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:3,
                        inputType:"text",
                        inputLabel:"Codice fiscale e/o P.IVA",
                        datorichiesto:"Codice fiscale e/o P.IVA",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:4,
                        inputType:"text",
                        inputLabel:"Telefono",
                        datorichiesto:"Telefono",
                        risultato:undefined,
                        selectItems:[]
                    },
               
                    {
                        index:5,
                        inputType:"email",
                        inputLabel:"Email",
                        datorichiesto:"Email",
                        risultato:undefined,
                        selectItems:[]
                    },   
                      {
                        index:6,
                        inputType:"text",
                        inputLabel:"Provincia di residenza del proprietario",
                        datorichiesto:"Provincia di residenza del proprietario",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:7,
                        inputType:"text",
                        inputLabel:"Comune / Città di residenza del proprietario",
                        datorichiesto:"Codice destinatario",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:8,
                        inputType:"text",
                        inputLabel:"Via/Piazza e n° civico di residenza",
                        datorichiesto:"Via/Piazza e n° civico di residenza",
                        risultato:undefined,
                        selectItems:[]
                    },
                    {
                        index:9,
                        inputType:"text",
                        inputLabel:"Codice postale",
                        datorichiesto:"Codice postale",
                        risultato:undefined,
                        selectItems:[]
                    },

                ]
            }
        ],
    complete:false, 

},    {
    domanda:"DATI DELL’IMMOBILE TIPO IMMOBILE",
    answer:[
                {
                text:"DATI DELL’IMMOBILE TIPO IMMOBILE",
                img:`${chisiamoImg}`,
                checked:true,
                checkedHidden:true,
                select:true,
                input:false,
              
                dati:[{
                    index:1,
                    inputType:"email",
                        inputLabel:"TIPO IMMOBILE",
                        datorichiesto:"TIPO IMMOBILE",
                        selectItems:[
                            {
                                option:"Appartamento"
                            },
                            {
                                option:"Ufficio"
                            },
                            {
                                option:"Commerciale"
                            },
                            {
                                option:"Casa singola / villa"
                            },
                            {
                                option:"Casa / villetta a schiera"
                            },
                            {
                                option:"Capannone"
                            },
                            {
                                option:"Hotel"
                            },
                            {
                                option:"Casa rurale"
                            },
                            {
                                option:"Altro",
                                inputType:"text",
                                inputLabel:"Altro",
                                datorichiesto:"Altro",
                                
                            },
                        ],
                        
                        risultato:undefined
                },
                {
                    index:2,
                    inputType:"email",
                        inputLabel:"QUANTI PIANI HA L’IMMOBILE? SELEZIONA IL PIANO DELL’IMMOBILE",
                        datorichiesto:"QUANTI PIANI HA L’IMMOBILE? SELEZIONA IL PIANO DELL’IMMOBILE",
                        selectItems:[
                            {
                                option:"Interrato"
                            },
                            {
                                option:"Seminterrato"
                            },
                            {
                                option:"Piano terra"
                            },
                            {
                                option:"1"
                            },
                            {
                                option:"2"
                            },
                            {
                                option:"3"
                            },
                            {
                                option:"4"
                            },
                            {
                                option:"5"
                            },
                            {
                                option:"6"
                            },
                            {
                                option:"7"
                            },
                            {
                                option:"8"
                            },
                            {
                                option:"9"
                            },
                            {
                                option:"10"
                            },
                            {
                                option:"maggiore di 10"
                            },
                            {
                                option:"Ultimo"
                            },
                            {
                                option:"Ultimo"
                            },
                            {
                                option:"Piano rialzato"
                            },
                            {
                                option:"Su più livelli"
                            },
                        
                        ],
                        
                        risultato:undefined
                }
                ,    {
                    index:3,
                    inputType:"email",
                        inputLabel:"TIPO COSTRUZIONE",
                        datorichiesto:"TIPO COSTRUZIONE",
                        selectItems:[
                            {
                                option:"Cemento armato"
                            },
                            {
                                option:"Muratura"
                            },
                            {
                                option:"Altro",
                                inputType:"text",
                                inputLabel:"Altro",
                                datorichiesto:"Altro"
                            },
                  
                        
                        ],
                        
                        risultato:undefined
                },    {
                    index:4,
                    inputType:"email",
                        inputLabel:"SELEZIONA STRUTTURA DEL TETTO",
                        datorichiesto:"SELEZIONA STRUTTURA DEL TETTO",
                        selectItems:[
                            {
                                option:"Tetto"
                            },
                            {
                                option:"Tetto ristrutturato negli ultimi 3 anni"
                            },
                            {
                                option:"Terrazza"
                            },
                            {
                                option:"Altro",
                                inputType:"text",
                                inputLabel:"Altro",
                                datorichiesto:"Altro"
                            },
                  
                        
                        ],
                        
                        risultato:undefined
                },
                {
                    index:5,
                    inputType:"number",
                        inputLabel:"Anno di costruzione (presunto)",
                        datorichiesto:"Anno di costruzione (presunto)",
                        selectItems:[],
                        risultato:undefined
                },
                
                {
                    index:6,
                    inputType:"email",
                        inputLabel:"Selezionare MQ",
                        datorichiesto:"Selezionare MQ",
                        selectItems:[
                            {
                                option:"Loft e monolocale fino a 40 mq"
                            },
                            {
                                option:"Bilocale fino a 70 mq (monolivello)"
                            },
                            {
                                option:"Trilocale fino a 90 mq (monolivello)"
                            },
                            {
                                option:"Quadrilocale fino a 200 mq",
                            },
                  
                        
                        ],
                        
                        risultato:undefined
                },
                {
                    index:7,
                    inputType:"email",
                        inputLabel:"MOTIVO DELL’APE?",
                        datorichiesto:"MOTIVO DELL’APE?",
                        selectItems:[
                            {
                                option:"Affitto"
                            },
                            {
                                option:"Compravendita"
                            },
                            {
                                option:"Detrazioni fiscali"
                            },
                            {
                                option:"Aumento di 1 o più classi",
                            },
                            {
                                option:"Ristrutturazione importante"
                            },
                            {
                                option:"Riqualificazione energetica"
                            },
                            {
                                option:"Donazione",
                            },
                            {
                                option:"Nuova costruzione",
                            },
                            {
                                option:"Altro",
                                inputType:"text",
                                inputLabel:"Altro",
                                datorichiesto:"Altro"
                            },
                  
                        
                        ],
                        
                        risultato:undefined
                },
                {
                    index:8,
                    inputType:"email",
                        inputLabel:"TIPOLOGIA DI SERRAMENTI",
                        datorichiesto:"TIPOLOGIA DI SERRAMENTI",
                        selectItems:[
                            {
                                option:"legno"
                            },
                            {
                                option:"alluminio"
                            },
                            {
                                option:"pvc"
                            }
                  
                        
                        ],
                        
                        risultato:undefined
                },

            
            ]
            }
        ],
    complete:false, 

},
{
    domanda:"RISCALDAMENTO E CLIMATIZZAZIONE",
    answer:[
                {
                text:"RISCALDAMENTO E CLIMATIZZAZIONE",
                img:`${chisiamoImg}`,
                checked:true,
                checkedHidden:true,
                select:true,
                input:false,
              
                dati:[{
                    index:1,
                    inputType:"email",
                        inputLabel:"TIPO DI IMPIANTI",
                        datorichiesto:"TIPO DI IMPIANTI",
                        selectItems:[
                            {
                                option:"Autonomo*"
                            },
                            {
                                option:"Centralizzati (Condominiale)**"
                            }
                          
                        ],
                        
                        risultato:undefined
                }
                ],
                
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
