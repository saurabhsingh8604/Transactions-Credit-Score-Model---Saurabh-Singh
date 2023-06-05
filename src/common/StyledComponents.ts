import { Row, Typography, Form } from 'antd';
import styled from 'styled-components';
import COLOR from './Color';
import { TextProps } from './StyledInterface';

const { Title, Paragraph } = Typography;

export const StyledTitle = styled(Title)`
  color: ${(props: TextProps) => props.color || COLOR.BLACK} !important;
  margin-bottom: ${(props: TextProps) => props.marginBottom || 0} !important;
  font-size: ${(props: TextProps) => (props.fontSize || 14) + 'px'} !important;
  font-weight: ${(props: TextProps) => props.fontWeight || 700} !important;
`;

export const PageTitle = styled(StyledTitle)`
  text-transform: capitalize;
`;

export const NormalText = styled(Paragraph)`
  color: ${(props: TextProps) => props.color || COLOR.BLACK} !important;
  margin-bottom: ${(props: TextProps) => props.marginBottom || 0} !important;
  font-size: ${(props: TextProps) => (props.fontSize || 14) + 'px'};
  line-height: ${(props: TextProps) => (props.fontSize ? props.fontSize + 8 + 'px' : '22px')};
  font-weight: ${(props: TextProps) => props.fontWeight || '400'};
`;

export const SmallText = styled(NormalText)`
  font-size: ${(props: TextProps) => props.fontSize || '10px'};
  line-height: ${(props: TextProps) => (props.fontSize ? props.fontSize + 6 + 'px' : '16px')};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;


  .submit-button {
    padding: 5px 16px;
    border-radius: 4px;
    margin-top: 8px;
  }
`;

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 0px !important;

  .ant-form-item-row {
    gap: 4px;
    .ant-form-item-label {
      padding: 0;
      height: 24px !important;

      label {
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        color: ${COLOR.GRAY_10};
        text-transform: uppercase;

        .ant-form-item-optional {
          text-transform: lowercase;
        }
      }
    }
  }
  .ant-form-item-control {
    &-input {
      min-height: auto;
      .ant-select,
      .ant-input,
      .ant-input-password {
        border: 1px solid ${COLOR.GRAY_5} !important;
        border-radius: 4px !important;
      }
      .ant-select {
        .ant-select-selector {
          border: 0px !important;
          border-radius: inherit !important;
        }
      }
      .ant-input-password {
        .ant-input {
          border: 0px !important;
        }
      }
    }
    .ant-form-item-explain-error {
      font-size: 12px;
    }
  }
`;

