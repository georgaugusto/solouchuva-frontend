import styled from 'styled-components';

export const SensorData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 295px;
  height: 160px;

  color: #ffffff;
  border-radius: 22px;

  margin-left: 17px;

  svg {
    color: #ffffff;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-style: normal;
  font-size: 24px;
  line-height: 18px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-style: normal;
  font-size: 16px;
  line-height: 18px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderContent = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
      color: #ffffff;
      width: 20px;
      height: 20px;
    }
  }
`;
export const BodyContent = styled.div`
  margin: 5px;
`;

export const FootContent = styled.div`
  p {
    font-style: bold;
    font-size: 12px;
  }
`;
