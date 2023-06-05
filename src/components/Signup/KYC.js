import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  Typography,
  Steps,
  Form,
  Input,
  Row,
  Col,
  Checkbox,
  Button,
  Upload,
  message,
} from 'antd'
import { Link } from 'react-router-dom'
import { UploadOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`
const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 19px !important;
  }
`
export const StyledCol = styled(Col)`
  flex: 0 0 48.5%;
`
const SmallText = styled(Paragraph)`
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
`
const StyledTitle = styled(Paragraph)`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-left: -285px;

  .ant-typography {
    margin-bottom: 0px;
  }
`
const Text = styled(Paragraph)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #878787;
  margin: 0px 0px 0px -330px;
`

export default function KYC() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
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
      <StyledTitle style={{ marginBottom: '8px', }}>
        Setup Your Company
      </StyledTitle>
      <Text>Make risk taking easy again!</Text>

      <Steps
        style={{ marginBottom: '16px' }}
        size="small"
        current={2}
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
        // onFinish={handleSubmit}
        className="login-form"
        data-loc="ui-infra-login-form"
      >
        <Row>
          <StyledCol span={12}>
            <Form.Item label="Self declration" required tooltip="This is a required field">
              <Upload {...props} >
                <Button icon={<UploadOutlined />} style={{width:"250px", textAlign: 'initial'}}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
          <StyledCol span={12} style={{ marginLeft: '15px' }}>
          <Form.Item label="Aadhaar card of all stakeholders" required tooltip="This is a required field">
              <Upload {...props}>
                <Button 
                style={{width:"250px", textAlign: 'initial'}}
                icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
        </Row>
        <Row>
          <StyledCol span={12}>
            <Form.Item label="PAN card of all stakeholders" required tooltip="This is a required field">
              <Upload {...props}>
                <Button icon={<UploadOutlined />} style={{width:"250px", textAlign: 'initial'}}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
          <StyledCol span={12} style={{ marginLeft: '15px' }}>
          <Form.Item label="GST Certificate" required tooltip="This is a required field">
              <Upload {...props}>
                <Button icon={<UploadOutlined />} style={{width:"250px", textAlign: 'initial'}}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
        </Row>
        <Row>
          <StyledCol span={12}>
            <Form.Item label="Bank Statements (past 12 months)" required tooltip="This is a required field">
              <Upload {...props}>
                <Button icon={<UploadOutlined />} style={{width:"250px", textAlign: 'initial'}}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
          <StyledCol span={12} style={{ marginLeft: '15px' }}>
          <Form.Item label="GSTIN returns (past 12 months)" required tooltip="This is a required field">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}  style={{width:"250px", textAlign: 'initial'}}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
        </Row>
        <Row>
          <StyledCol span={12}>
            <Form.Item label="Cancelled cheque" required tooltip="This is a required field">
              <Upload {...props}>
                <Button icon={<UploadOutlined />} style={{width:"250px", textAlign: 'initial'}}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
          <StyledCol span={12} style={{ marginLeft: '15px' }}>
          <Form.Item label="Udyam MSME" required tooltip="This is a required field">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}  style={{width:"250px", textAlign: 'initial'}}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </StyledCol>
        </Row>
        <Form.Item>
          <SmallText>
            <div style={{ float: 'left', fontWeight: '400', fontSize: '14px' }}>
              <Checkbox onChange={onChange}>
                {' '}
                Agree to <a href="">Privacy policy</a> and
                <a href="https://partner.bizongo.com/terms/" target="_blank">
                  {''} Terms and conditions
                </a>
              </Checkbox>
            </div>
          </SmallText>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            data-loc="bamboo-login-submit"
            block
          >
            <Link to="/dashboard">Continue to my account</Link>
          </Button>
        </Form.Item>
      </StyledForm>
    </StyledCard>
  )
}
