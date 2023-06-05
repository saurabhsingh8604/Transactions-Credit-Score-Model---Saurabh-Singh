import React from 'react'
import { Menu, Space, Avatar, Typography, Row, Col, notification, Button } from 'antd'
import {
  AppstoreOutlined,
  DashboardFilled,
  FilePdfOutlined,
  UserOutlined,
} from '@ant-design/icons'
import './Dashboard.less'
import styled from 'styled-components'
const { Text } = Typography

const StyledText = styled(Text)`
  .ant-typography {
    fontsize: 10px;
  }
`

const TextStyled = styled(Text)`
  font-weight: 600px;
  font-size: 16px
`

export default function Nav() {

    // const [api, contextHolder] = notification.useNotification();
    // const openNotification = (placement) => {
    //   api.info({
    //     message: `Successfully Download`,
       
    //     placement,
    //   });
    // };
    const openNotification = () => {
        alert("Successfully Download")
    }
  const dashboard = (
    <Space size={8}>
      <DashboardFilled />
      Dashboard
    </Space>
  )
  const transaction = (
    <Space size={8}>
     
      {/* <a href='/TC-Report.pdf' target='blank' download=''>Transaction Credit Report</a> */}
      <Button type='link' href='/TC-Report.pdf' target='blank' download='' onClick={openNotification}>  <FilePdfOutlined /> {' '}Transaction Credit Report</Button>
    </Space>
  )

  const items = [dashboard, transaction]
  return (
    
    <div
      style={{
        top: 0,
        zIndex: 1,
        width: '100%',
        background: 'white',
      }}
    >
      {/* <h3 style={{  marginRight: '16px', marginLeft:"-800px" }}>Product name</h3> */}
      <TextStyled
        style={{ float: 'left', marginRight: '16px', marginTop: '20px' }}
      >
       <b>Credit Budddy</b>
      </TextStyled>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={new Array(2).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: items[index],
        }))}
      />

      {/* <div style={{ marginTop: '-39px', marginLeft: '1182px' }}>
        <Avatar shape="square" size={30} icon={<UserOutlined />} />
        <div style={{ marginTop: '-39px', marginLeft: '140px' }}>
          <Row>
            <Col style={{ marginLeft: '10px' }}>
              <Text style={{ fontSize: '14px' }}>ABC Birla</Text>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginLeft: '10px', fontSize: '10px' }}>
              {' '}
              <StyledText style={{ fontSize: '10px' }}>BIZONGO</StyledText>
            </Col>
          </Row>
        </div>
      </div> */}
    </div>
  )
}
