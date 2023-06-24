
import React, { FC } from "react";



const DownloadButton:FC<{name:string,data:string}> = ({data, name}) => {
    const handleDownload = () => {
      // Converti i dati Base64 in un array di byte
      const byteCharacters = atob(data);
  
      // Crea un array di byte utilizzando il codice ASCII dei caratteri
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
  
      // Crea un oggetto Blob dal tuo array di byte
      const blob = new Blob([new Uint8Array(byteNumbers)], { type: 'application/octet-stream' });
  
      // Crea un URL oggetto per il blob
      const fileUrl = URL.createObjectURL(blob);
  
      // Crea un link temporaneo e simula il clic per avviare il download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = name;
      link.click();
  
      // Rilascia l'URL oggetto
      URL.revokeObjectURL(fileUrl);
    };
  
    return (
      <button onClick={handleDownload}>
        Scarica File
      </button>
    );
  };



  export default DownloadButton;