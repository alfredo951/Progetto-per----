import React from 'react'
import Column from '../components/Column'
import Row from '../components/Row'
import chisiamoImg from './../road220058.jpeg'

export default function ChiSiamo() {
  return (
    <Row>
        <Column height={"550px"} width={"50%"}>
            <img src={chisiamoImg} alt="chisiamo_img" style={{width:"100%"}}/>
        </Column>
        <Column height={"550px"} width={"50%"}>
            <div style={{padding:"10px 30px"}}>
            <h2>Chi Siamo</h2>
            </div>
            <div style={{padding:"10px 30px"}}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
            </div>
        </Column>
    </Row>
  )
}
