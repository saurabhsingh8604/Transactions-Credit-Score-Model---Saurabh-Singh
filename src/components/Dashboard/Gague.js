import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { Card, Typography, Row } from 'antd'
import {
    QuestionCircleOutlined
  } from '@ant-design/icons';
import styled from 'styled-components'

const {Paragraph} = Typography
const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 16px;
  }
`

const Text = styled(Paragraph)`
font-weight: 500;
font-size: 16px;
line-height: 24px;
`;

const Number = styled(Paragraph)`
font-weight: 800;
font-size: 16px;
line-height: 14px;
`;

const NormalText = styled(Paragraph)`
font-weight: 400;
font-size: 10px;
line-height: 14px;
`;

const text = (
    <div>
      Your Transaction Credit Score {' '} <QuestionCircleOutlined />
    </div>
  )
export default function Gague() {
  return (
    <StyledCard title={text}>
        <div style={{width:400}}>
        <GaugeChart id="gauge-chart1" 
          nrOfLevels={20} 
          percent={0.86} 
          style={{fill:"red",}}
          colors={['#EA4228', '#F5CD19', '#5BE12C']}
        />
        </div>
       <Number>820</Number>
         <NormalText>Last updated: 18-03-2023</NormalText>
        <Text style={{display:'block'}}>Your Credit Score is <Text style={{color:'#66B581', background:'#F1F9F4',  width:78, marginLeft:"158px"}}>Excellent</Text></Text><br></br>
        <a style={{marginTop:"46px"}} href='https://docs.google.com/spreadsheets/d/1AFbRBLWxiiiAqE5QvkADJzgaN-XVub_U/edit?usp=sharing&ouid=111978504457136950022&rtpof=true&sd=true' target='blank'>See how the score is calculated ?</a>
    </StyledCard>
  )
}
