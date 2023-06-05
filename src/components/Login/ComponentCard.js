import React from 'react'
import { Col, Layout, Row, Card, Button, Space } from 'antd'
import styled from 'styled-components';
import COLOR from '../../common/Color';
import {StyledTitle, SmallText,  } from 'common/StyledComponents'



const StyledLayout = styled(Layout)`
  width: 100vw;
  background: none;
`;

const StyledCard = styled(Card)`
  border-radius: 8px;
  width: 394px;
  @media (max-width: 576px) {
    width: 100%;
  }

  .ant-card-body {
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    background: #ffffff;
    border-radius: inherit;

    .card-contnet {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
    }

    .card-button-section {
      width: 100%;

      .card-button {
        border-radius: 4px;
      }
    }
  }
`;



export default function ComponentCard(props) {

  const {
    title,
    showSubmitButton = false,
    submitButtonText = 'continue',
    isSubmitButtonDisable = true,
    submitButtonTerms,
    additionalContent,
    handleSubmit
  } = props;

  return (
    <StyledCard>
      {title && (
        <StyledTitle fontSize={20} fontWeight={600} color={COLOR.GRAY_10} >
          {title}
        </StyledTitle>
      )}
      <div className="card-contnet">{props.children}</div>
      {showSubmitButton && (
        <div className="card-button-section">
          <Space size={4} direction="vertical">
            <Button
              className="card-button"
              type="primary"
              disabled={isSubmitButtonDisable}
              block
              onClick={handleSubmit}>
              {submitButtonText}
            </Button>
            {submitButtonTerms && (
              <SmallText fontWeight={600} color={COLOR.GRAY_8}>
                {submitButtonTerms}
              </SmallText>
            )}
          </Space>
        </div>
      )}
      {additionalContent && <div className="card-additional-text">{additionalContent}</div>}

    </StyledCard>
  )
}
