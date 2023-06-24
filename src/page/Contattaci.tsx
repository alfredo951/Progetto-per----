import React from 'react'
import Row from '../components/Row'
import Column from '../components/Column'
import chisiamoImg from './../road220058.jpeg'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import{AiOutlineMail} from'react-icons/ai'
import { SocialIcon } from 'react-social-icons'

export default function Contattaci() {
  return (<>      <Row>
        <Column height={"550px"} width={"50%"}>
        <div style={{padding:"10px 30px"}}>
        <h2>Chi Siamo</h2>
        </div>
        <div style={{padding:"10px 30px"}}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
        </div>
    </Column>
    <Column height={"550px"} width={"50%"}>
        <img src={chisiamoImg} alt="chisiamo_img" style={{width:"100%"}}/>
    </Column>

</Row>
        <Row>
    <Column height={"550px"} width={"33%"}>
        <h2 >Mandaci un messagio a </h2>
        <div style={{padding:"10px 30px", fontSize:"5rem"}}>
       <SocialIcon network='whatsapp' style={{ height: 120, width: 120 }}/>
        </div>
        <div style={{padding:"10px 30px"}}>
        <h2>3516190403</h2>
   </div>
    </Column>
    <Column height={"550px"} width={"33%"}>
    <h2>Inviaci una e-mail</h2>
        <div style={{padding:"10px 30px", fontSize:"6rem"}}>
<AiOutlineMail/>

        </div>
        <div style={{padding:"10px 30px"}}>
        <h2>ciao@gmail.com</h2>
   </div>
    </Column>
    <Column height={"550px"} width={"33%"}>
            <h2>Chiama</h2>
        <div style={{padding:"10px 30px", fontSize:"6rem"}}>
        <BsFillTelephoneForwardFill/>
        </div>
        <div style={{padding:"10px 30px"}}>
        <h2>3516190403</h2>
        </div>
    </Column>
</Row>
</>

  )
}
