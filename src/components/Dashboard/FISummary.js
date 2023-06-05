import React from 'react'
import { Col, Row, Statistic, Card, Typography } from 'antd'
import CountUp from 'react-countup'
import styled from 'styled-components'
import {
    QuestionCircleOutlined
  } from '@ant-design/icons';
 const {Paragraph} = Typography  

  const StyledText = styled(Paragraph)`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-left:-300px;
  margin-top:-10px
  .ant-typography {
    margin: 0px !important;
  }
`


const text = <StyledText> Executive Summary {' '}<QuestionCircleOutlined /></StyledText>
export default function FISummary() {
  const formatter = (value) => <CountUp end={value} separator="," />
  return (
    <div
      style={{
        width: '500px',
      }}
    >
      <Card title={text}>
        <Row gutter={16}>
          <Col span={1200}>
            <Statistic
              title="Total no.of customers"
              value={(112, 893)}
              formatter={formatter}
            />
          </Col>
          <Col span={1200}>
            <Statistic
              title="Total Loan Dispursed"
              value={21.5}
              precision={3}
              formatter={formatter}
            />
          </Col>
          <Col span={1200}>
            <Statistic
              title="QoQ Loan disbursed"
              value={3.6}
              precision={3}
              formatter={formatter}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={1200}>
            <Statistic
              title="Defaulted Amount"
              value={2.9}
              formatter={formatter}
            />
          </Col>
          <Col span={1200}>
            <Statistic
              title="Total Receivables"
              value={8.7}
              precision={2}
              formatter={formatter}
            />
          </Col>
          <Col span={1200}>
            <Statistic
              title="QoQ Revenue %"
              value={9.3}
              precision={0}
              formatter={formatter}
            />
          </Col>
        </Row>
      </Card>
    </div>
  )
}
