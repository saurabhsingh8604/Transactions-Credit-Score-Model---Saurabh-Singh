import React from 'react'
import { Row, Col, Card, Statistic, Divider, Typography } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { QuestionCircleOutlined } from '@ant-design/icons'
const { Title } = Typography

const StyledTitle = styled(Title)``
const StyledCard = styled(Card)`

  .ant-card-body {
    padding: 70px 24px;
  }
`
const StyledStatic = styled(Statistic)`
  .ant-statistic-content-value-int {
    color: #000000;
    fontweight: 600px;
  }
`

const text = (
  <div>
    Your Industry ADD {' '} <QuestionCircleOutlined />
  </div>
)

const num = <><div ><p style={{fontSize:60}}>25</p></div></>;

export default function AverageDelay() {
  return (
    <StyledCard  title={text} >
    
        
        <Row>
          <Col span={24}>
            <Statistic
              title="Your Add"
              value={10}
              precision={2}
              
            />
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
          <Col span={24}>
            <StyledStatic
             title='Your Industry Add'
              value={25}
              //   precision={2}
              valueStyle={{
                color: '#3F8600',
              }}
              //   prefix={<ArrowUpOutlined />}
              //   suffix="%"
            />
          </Col>
        </Row>

    </StyledCard>
  )
}
