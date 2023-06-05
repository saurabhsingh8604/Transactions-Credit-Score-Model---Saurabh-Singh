import React from 'react'
import { Space, Card, Typography } from 'antd'
import styled from 'styled-components'


const { Paragraph } = Typography

const StyledText = styled(Paragraph)`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 16px;
  }
`

const NormalText = styled(Paragraph)`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`

export default function Cards() {
  return (
    <div>
      <div
        style={{
          paddingLeft: '16px',
        }}
      >
        <StyledCard
          style={{
          
            textAlign: 'justify',
            backgroundColor: '#FFF8EE80',
            borderColor:'#FEBD54'
          }}
        >
          <NormalText>Know your clients better!</NormalText>
          <StyledText>
            Get Transactional Credit Score reports for all your clients for free
            by simply uploading your Transactions
          </StyledText>
          <a>Upload Now</a>
        </StyledCard>
        <br></br>
        <StyledCard
          style={{
            textAlign: 'justify',
            backgroundColor: '#F1F9F480',
            borderColor:'#70C78E'
          }}
        >
          <NormalText>Get Free Credit Report</NormalText>
          <StyledText>
            Get best interest rates from top banks/FI's by registering to Credit
            buddy's real time bidding platform
          </StyledText>
          <a>Register here</a>
        </StyledCard>
      </div>
    </div>
  )
}
