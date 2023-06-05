import React from 'react'
import { Row, Col, Card, Statistic, Divider, Typography, Space } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import './Dashboard.less'
import styled from 'styled-components'
import { ArrowDownOutlined, ArrowUpOutlined ,DownloadOutlined} from '@ant-design/icons'
const { Paragraph } = Typography

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 50px 24px;
  }
`
const NormalText = styled(Paragraph)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const title = (
  <div style={{ }}>
    Your Transaction Summary <QuestionCircleOutlined />
  </div>
)
const data = <div style={{ fontWeight: '500px' }}>52</div>
export default function TransactionSummery() {

  return (
    <StyledCard style={{ }} title={title}>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Total tranation"
            value={38}
            precision={0}
            
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="No. of Clients"
            value={10}
            precision={0}
           
           
        
          />
        </Col>
        <Divider></Divider>
        <Col span={12}>
          {/* <Card bordered={false}> */}
          <Statistic
            title="Avg. Trans. value"
            value={'9.45 L'}
            precision={2}
            // valueStyle={{
            //   color: '#3F8600',
            // }}
            //   prefix={<ArrowUpOutlined />}
            
          />
          {/* </Card> */}
        </Col>
        <Col span={12}>
          {/* <Card bordered={false}> */}
          <Statistic
            title="Totsl Credit Availed"
            value={'3.42 Cr'}
            precision={2}
            
            
            
          />
          {/* </Card> */}
        </Col>
      </Row>
      <NormalText style={{marginTop:'40px'}}><a><Space size={8}><DownloadOutlined /> Download Transaction history</Space></a></NormalText>
    </StyledCard>
  )
}
