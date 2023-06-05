import React, { useState } from 'react'
import {
  Card,
  Form,
  Typography,
  Input,
  Select,
  Row,
  Col,
  Button,
  Steps,
} from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import KYC from './KYC'
import Data from './Data.json'

const { Paragraph, } = Typography
const { Option } = Select
const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`
const StyledRow = styled(Row)`
  //   margin-bottom: 9px;
`

export const StyledCol = styled(Col)`
  flex: 0 0 48.5%;
`

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px !important;
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
const StyledSelect = styled(Select)`
.ant-select-selection-item{
    margin-left: -403px;
}
`;

export default function CompanyDetails() {
    //const [companyType, setCompanyType] = useState('enter company name')
    const [inputFields, setInputFields] = useState(Data);
    const [companyName, setCompanyName] = useState('')
    const [companyType, setCompanyType] = useState('')
    const [companyEmail, setCompanyEmail] = useState('')
    //const [cinNumber, setcinNumber] = useState('')

    const demo = {
        company_type: '',
          company_name: '',
          company_email:'',
          CIN_number:''
      } 
    const [companyDetails, setCompanyDetails] = useState(demo)


  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const handleSubmit = (value) => {
    console.log("value", value)
  }




  const test = (value) => {
    console.log("value", value)
    for (let i = 0; i < inputFields.length; i++) {
        if(inputFields[i].CIN_number === value){
            setCompanyName(inputFields[i].company_name)
            setCompanyType(inputFields[i].company_type)
            setCompanyEmail(inputFields[1].company_email)
        }
      }
  
  }

  const enterCinNumber = 'U35923DL2001PTC110092';

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
      <>
      <StyledTitle style={{marginBottom:"8px"}}>Setup Your Company</StyledTitle>
      <Text>Make risk taking easy again!</Text>
      <Steps
       style={{marginBottom:"16px"}}
        size="small"
        current={1}
        items={[
          {
            title: 'Finished',
          },
          {
            title: 'In Progress',
          },
          {
            title: 'KYC',
          },
        ]}
      />

     
        <StyledForm
          layout="vertical"
          onFinish={handleSubmit}
          className="login-form"
          data-loc="ui-infra-login-form"
        >
          {/* <Form.Item label="Creating account for?" name='company' rules={[{ required: true, message: 'Enter email_id' }]}> 
            <Input placeholder="company"></Input>
          </Form.Item> */}
          <Form.Item label="Creating account on behalf of" name='select' required tooltip="This is a required field">
            <StyledSelect
              size="large"
              defaultValue="Company"
              style={{
                width: 514,
                 height:32
               
              }}
              onChange={handleChange}
            >
              <Option value="jack">Comapny</Option>
              <Option value="lucy">Bank</Option>
            </StyledSelect>
          </Form.Item>
          <Form.Item label="CI number" name="CIN" required tooltip="This is a required field">
            <Input placeholder='Enter CIN number' onChange={e=> test(e.target.value)} ></Input>
          </Form.Item>
          <Form.Item label="company name" name="company_name" required tooltip="This is a required field">
            <Input disabled placeholder={companyName} ></Input>
          </Form.Item>
          <StyledRow justify="space-between">
            <StyledCol span={12} >
              <Form.Item label="Company Type" name="company_type" required tooltip="This is a required field">
                <Input  disabled placeholder={companyType} />
              </Form.Item>
            </StyledCol>
            <StyledCol span={12} >
              <Form.Item label="Company Email" name="company_email" required tooltip="This is a required field">
                <Input  disabled placeholder={companyEmail}/>
              </Form.Item>
            </StyledCol>
          </StyledRow>
          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              data-loc="bamboo-login-submit"
              block
            >
              <Link to="/kyc">
                Continue
                </Link>
            </Button>
          </Form.Item>
        </StyledForm>
      </>
    </StyledCard>
  )
}
