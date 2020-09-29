import styled from 'styled-components';

export const SensorData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 205px;
  height: 110px;

  color: #ffffff;
  border-radius: 22px;

  margin-left: 17px;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-style: normal;
    font-weight: nomal;
    font-size: 24px;
    line-height: 18px;

    /* margin-right: 17px; */

    svg {
      color: #ffffff;
      width: 25px;
      height: 25px;
    }
  }

  > span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
`;
