import styled from 'styled-components';
import { Card, Select } from 'antd';

export const StyledCard = styled(Card)`
// border-radius: 8px;
//   width: 394px;
//   @media (max-width: 576px) {
//     width: 100%;
//   }

//   .ant-card-body {
//     padding: 24px 16px;
//     display: flex;
//     flex-direction: column;
//     gap: 24px;
//     align-items: center;
//     background: #ffffff;
//     border-radius: inherit;

//     .card-contnet {
//       display: flex;
//       flex-direction: column;
//       gap: 24px;
//       width: 100%;
//     }

    .card-button-section {
      width: 100%;

      .card-button {
        border-radius: 4px;
      }
    }
  }
`;


export const StyledSelect = styled(Select)`
  .ant-select-selection-placeholder {
    margin-left: -200px;
  }

  .ant-select-selection-item {
    margin-left: -250px;
  }
`


