import { RisultatoI, RisultatoItemI } from "../components/Stepper";

 export  const jsonnfile=async(file:File)=>{
    var c:RisultatoItemI={name:"", data:""}

 
return new Promise((resolve, reject) => {
  let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     //me.modelvalue = reader.result;
     console.log(reader.result);
     resolve(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };

  
});

   



   
   }
   
   
   
  export const fileconvert=(fileJson:{   name: string,
     data: string})=>{
       const { name,data}=fileJson;
   
   
   // Converti i dati Base64 in un array di byte
   const byteCharacters = atob(data);
   
   // Crea un array di byte utilizzando il codice ASCII dei caratteri
   const byteNumbers = new Array(byteCharacters.length);
   for (let i = 0; i < byteCharacters.length; i++) {
     byteNumbers[i] = byteCharacters.charCodeAt(i);
   }
   
   // Crea un oggetto Blob dal tuo array di byte
   const blob = new Blob([new Uint8Array(byteNumbers)], { type: 'application/octet-stream' });
   
   // Crea un oggetto File dal Blob
   const file = new File([blob], name);
   
   // Puoi quindi utilizzare l'oggetto file come desideri
   console.log(file);
   }