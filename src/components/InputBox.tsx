import React, { ChangeEvent} from "react";
import { jsonnfile } from "../store/fileConvert";







const InputBox =(props:{label:string | undefined, type: string, placeholder: string, setValue?: Function ,Onchangge?:(file:File)=>void , style?:{}})=>{
    
    const {setValue,label,type,placeholder,Onchangge}=props
    const handleValueChange=(event:ChangeEvent<HTMLInputElement>)=>{
        
  
       if( type==='file' && event.currentTarget.files && Onchangge){ Onchangge(event.currentTarget.files[0]); console.log(event.currentTarget.files[0])}else{
       if(setValue) setValue(event.target.value);
       }
    }
    return(
    <div style={ { display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    width:"100%"}}>
       {label && <label style={{ fontSize:"1.5rem",
    textAlign:"center",
    width:"50%",
    padding:"20px"}}>{label}</label>} 
        <input

        type={type}
        placeholder={placeholder}
        onChange={handleValueChange}
        style={props.style}
        />
    </div>
)
}




export default InputBox;


