import React, { useState } from 'react'
//import { StyledCard } from '../Login/StyledComponent'
import {
  Button,
  Input,
  Form,
  Typography,
  Card,
  Select,
  Radio,
  Row,
  Col,
  Space,
} from 'antd'
import './Signup.less'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { StyledSelect } from './StyledComponent'
import { Link } from 'react-router-dom'
import CompanyDetails from './CompanyDetails'
// import CSS from 'csstype'
const { Title, Paragraph } = Typography

const StyledRadio = styled(Radio.Group)`
  margin-left: -280px;

  //   .ant-form-item-control {
  //     display: contents;
  //     text-align: initial !important;
  //   }
  //   .ant-form-item-control-input {
  //     text-align: initial !important;
  //   }
`
const StyledCard = styled(Card)`
  padding: 24px 24px;
  width: 40%;
  box-shadow: rgb(187 187 187 / 40%) 0px 1px 25px;
  border: none;
  border-radius: 4px;
  margin: 100px 400px 0px 400px;

  .ant-card-body {
    padding: 0;
  }
`
const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px !important;
  }
`

const StyledCol = styled(Col)`
  flex: 0 0 48.5%;
`
const SmallText = styled(Paragraph)`
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
`

const h2Styles = styled.div`
  .ant-card-body {
    display: none;
  }
`
const StyledTitle = styled(Paragraph)`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-left: -314px;

  .ant-typography {
    margin-bottom:0px;
  }
`
const Text = styled(Paragraph)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color:#878787;
  margin: 0px 0px 0px -345px;

`

export default function Signup() {
  const [employee, setEmployee] = useState(true)
  const [bank, setBank] = useState(true)
  const [company, setCompany] = useState(true)
  const [value1, setValue1] = useState('Public')
  const [childComponent, setChildComponent] = useState(false)
  const [title, setTitle] = useState('Select address')
  const [content, setContent] = useState()
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(true)

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmit = (values) => {
    console.log('Success:', values)
    setChildComponent((preState) => !preState)
    //setTitle('Setup your company')
    setContent(h2Styles)
    setVisible(true)
    setData(false)
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`)
    if (value === 'employee') {
      setEmployee(false)
      setBank(true)
      setCompany(true)
    }
    if (value === 'bank') {
      setBank(false)
      setCompany(true)
      setEmployee(true)
    }
    if (value === 'company') {
      setCompany(false)
      setEmployee(true)
      setBank(true)
    }
  }

  const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value)
    setValue1(value)
  }

  const onClickButton = () => {
    // <CompanyDetails />
  }

  return (
    <StyledCard className="login-card">
      <StyledTitle style={{marginBottom:"8px"}}>Create your account</StyledTitle>
      <Text>Make risk taking easy again!</Text>
      {data === true ? (
        <>
          {' '}
          <StyledForm
            layout="vertical"
            onFinish={handleSubmit}
            className="login-form"
            data-loc="ui-infra-login-form"
          >
            <Row>
              <StyledCol span={12}>
                <Form.Item label="First Name" name="fisrt_name" rules={[{ required: true, message: 'Please input your name!' }]}>
                 
                    <Input placeholder="Enter fisrt name" />
                
                </Form.Item>
              </StyledCol>
              <StyledCol span={12} style={{ marginLeft: '15px' }}>
                <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Please input your last-name!' }]}>
                
                    <Input placeholder="Enter last name" />
                 
                </Form.Item>
              </StyledCol>
            </Row>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Enter email_id' }]}>
              <Input placeholder="Enter email address" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                data-loc="bamboo-login-submit"
                block
                onClick={onClickButton}
              >
                <Link to="/companydetails">Create Account</Link>
              </Button>
              {/* <>{childComponent && <CompanyDetails />}</> */}
            </Form.Item>
          </StyledForm>
          <SmallText style={{ fontWeight: 400 }}>
            Already have an account? <Link to="/login">Log in</Link>
          </SmallText>
        </>
      ) : (
        <>
          <CompanyDetails></CompanyDetails>
        </>
      )}
    </StyledCard>
  )
}
