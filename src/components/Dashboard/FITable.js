import React from 'react'
import { Tabs, theme, Table, Space, Typography , Button, Row , Col, Card} from 'antd'
import StickyBox from 'react-sticky-box'
import styled from 'styled-components'
import { UserOutlined, PhoneOutlined, SaveOutlined } from '@ant-design/icons'
// import {IMG} from '../../common/assets/Image3'
// import {img} from '../'
import './Dashboard'
import Blur from "react-blur";

const StyledTable = styled(Table)`
  .ant-table-thead {
    .ant-table-cell {
      color: #878787;
    }
  }
`
const { Paragraph } = Typography

const StyledText = styled(Paragraph)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`

const labels = ['CREQ-1234', 'CREQ-4756']

const columns = [
  {
    title: 'FI Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Credit Request',
    dataIndex: 'age',
    key: 'credit_request',
  },
  {
    title: 'Credit Offered',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Interest Rate',
    dataIndex: 'interest',
    key: 'interest',
  },
  {
    title: 'Approval Rate(%) ',
    dataIndex: 'approval',
    key: 'interest',
  },
  {
    title: 'Disbursement Duration(days) ',
    dataIndex: 'disbursement',
    key: 'interest',
  },
  {
    title: '',
    dataIndex: 'frame',
    key: 'interest',
  },
]

const imgi = <div></div>

const save = (
  <Space size={10}>
    <SaveOutlined
      style={{ marginLeft: '5px', color: '', marginRight: '10px' }}
    />
    save
  </Space>
)
const more = <>more</>

const frame = [save, more]
const data = [
  {
    key: 1,
    name: <img src={require('./image 1.png')} height={24} width={89} />,
    age: '7000000',
    address: '4000000',
    interest: '15%',
    frame: <a href='https://www.business.hsbc.co.in/en-gb/business-banking' target='blank'>apply</a>,
    approval: '96%',
    disbursement:'7 days'
  },
  {
    key: 2,
    name: <img src={require('./image 2.png')} height={24} width={89} />,
    age: '5000000',
    address: '6000000000',
    interest: '16%',
    frame: <a href='https://www.business.hsbc.co.in/en-gb/business-banking' target='blank'>apply</a>,
    approval: '80%',
    disbursement:'4 days'
  },
  {
    key: 3,
    name: <img src={require('./image 3.png')} height={24} width={89} />,
    age: '15000000',
    address: '400000000',
    interest: '14%',
    frame: <a href='https://www.business.hsbc.co.in/en-gb/business-banking' target='blank'>apply</a>,
    approval: '76%',
    disbursement:'10days'
  },
  {
    key: 4,
    name: <img src={require('./image 4.png')} height={24} width={89} />,
    age: '5000000',
    address: '7000000000',
    interest: '17%',
    frame: <a href='https://www.business.hsbc.co.in/en-gb/business-banking' target='blank'>apply</a>,
    approval: '50%',
    disbursement:'3 days'
  },
]

const child = [
  <StyledTable columns={columns} dataSource={data}></StyledTable>,
  <StyledTable columns={columns} dataSource={data}></StyledTable>,
]

const items = new Array(2).fill(null).map((_, i) => {
  const id = String(i + 1)
  return {
    label: labels[i],
    key: id,
    children: child[i],
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  }
})

export default function FITable() {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: colorBgContainer,
        }}
      />
    </StickyBox>
  )
  return (
    <>
      {/* <Row style={{margin:10, display:"flex"}}>
        <Col span={12} style={{marginLeft:"-220px"}}>
        <StyledText>Credit offers</StyledText>
      </Col>
      <Col span={12}>
        <Button type='primary' style={{float:'right'}}>Create new credit request</Button>
      </Col>
      </Row> */}
      <Row style={{display:'flex', justifyContent:'space-between'}}>
        <Col><StyledText>Credit offers</StyledText></Col>
        <Col><Button type='primary'>Create new credit request</Button></Col>
      </Row>
     <Tabs style={{blurRadius:"8"}} className='id' defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
    </>
  )
}
