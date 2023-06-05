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
import './login.less'
import styled from 'styled-components'
import { StyledSelect } from './StyledComponent'
import { Link } from 'react-router-dom'
const { Title, Paragraph } = Typography

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`
const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px !important;
  }
`

const SmallText = styled(Paragraph)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

export default function Login() {

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmit = (values) => {
    console.log('Success:', values)
  }

  return (
    <StyledCard
      style={{
        padding: '24px 24px',
        width: '40%',
        boxShadow: 'rgb(187 187 187 / 40%) 0px 1px 25px',
        border: 'none',
        borderRadius: '4px',
        margin: '100px 400px 0px 400px',
      }}
      className="login-card"
    >
      <StyledForm
        layout="vertical"
        onFinish={handleSubmit}
        className="login-form"
        data-loc="ui-infra-login-form"
      >
        <Title className="login-form__title">Welcome</Title>

        <Form.Item label="Email" required tooltip="This is a required field">
          <Form.Item name="email" noStyle>
            <Input placeholder="Enter email id" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Password" required tooltip="This is a required field">
          <Form.Item name="password" noStyle >
            <Input.Password placeholder="create password" />
          </Form.Item>
        </Form.Item>
        <Form.Item >
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            data-loc="bamboo-login-submit"
            block
          >
            Signup
          </Button>
        </Form.Item>
      </StyledForm>
      <SmallText>
        <div style={{float:'left'}}>
          Don't have an account? 
          <Link to="/signup">Signup</Link>
         </div> 
      </SmallText>
    

    </StyledCard>
  )
}
