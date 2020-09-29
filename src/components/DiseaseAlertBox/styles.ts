import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'low' | 'danger' | 'warning';
}

const diseaseTypeVariations = {
  low: css`
    background: #718b7d;
  `,
  warning: css`
    background: #d7c27a;
  `,
  danger: css`
    background: #bf746d;
  `,
};

export const DiseaseData = styled.div<ContainerProps>`
  background: #f7f7f7;
  border-radius: 28px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: 10px 30px 10px 30px;

  div {
    margin: 17px 37px;

    strong {
      font-style: normal;
      font-size: 16px;
      line-height: 32px;

      letter-spacing: 1.15714px;

      color: #5a5e69;
    }

    &::before {
      position: absolute;
      margin-left: 20px;
      border-radius: 28px;
      height: 60%;
      width: 5px;
      left: 0;
      top: 20%;
      content: '';
      ${(props) => diseaseTypeVariations[props.type || 'warning']};
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 22px;

      text-align: justify;
      letter-spacing: 0.598334px;

      color: #5a5e69;
    }

    span {
      display: flex;
      justify-content: flex-end;
      font-style: normal;
      /* font-weight: bold; */

      font-size: 13px;
      /* letter-spacing: 1.15714px; */

      color: #5a5e69;
    }
  }
`;
