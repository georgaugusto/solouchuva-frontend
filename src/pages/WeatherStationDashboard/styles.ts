import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
  padding-bottom: 55px;
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #f9f9f9;
`;

export const Content = styled.main`
  max-width: 100%;
  margin-left: 42px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SectionOne = styled.section`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  margin-right: 40px;
  margin-left: 120px;
`;

export const WeatherInformation = styled.div`
  display: flex;
  flex-direction: row;

  background: #ffecc8;
  border-radius: 28px;

  img {
    border-radius: 0px 28px 28px 0px;
    margin-top: auto;

    display: flex;
  }

  > div {
    display: flex;

    flex-direction: column;
    justify-content: space-around;

    margin: 27px;

    strong {
      margin-bottom: 12px;
      font-style: normal;

      font-size: 30px;
      line-height: 32px;
      color: #c45a01;
    }

    span {
      margin-bottom: 46px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: 0.598334px;
      color: #bd5600;
    }

    div {
      display: flex;
      flex-direction: row;

      svg {
        color: #242424;
      }

      p {
        margin-left: 9px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;

        letter-spacing: 0.598334px;

        color: #242424;
      }
    }
  }
`;

export const WeatherAlerts = styled.div`
  min-width: 743px;
  min-height: 446px;

  > div:first-child {
    background: #f9f9f9;
    border: none;
    box-sizing: none;
    border-radius: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
      margin-right: 146px;
      font-style: normal;
      font-size: 24px;
      line-height: 30px;

      letter-spacing: 1.02571px;

      color: #242424;
    }
  }

  > strong {
    font-style: normal;
    font-size: 24px;
    line-height: 30px;

    letter-spacing: 1.02571px;

    color: #242424;
  }

  > div {
    margin-top: 24px;

    background: #ffffff;
    border: 1px solid #e6e5f2;
    box-sizing: border-box;
    border-radius: 28px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > strong {
      margin-top: 26px;
      margin-left: 30px;
    }
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background: #f5f5f5;
  border: 1px solid rgba(237, 237, 245, 0.602601);
  border-radius: 30px 0px 0px 30px;

  > strong {
    margin-left: 30px;
    margin-top: 25px;
    font-style: normal;
    font-size: 18px;
    line-height: 30px;
    color: #242424;
  }
`;

export const WeatherStationContent = styled.div`
  margin: 30px 30px 0 30px;
`;

export const GridContent = styled.div`
  display: flex;
  justify-content: space-around;

  margin-bottom: 17px;
`;

export const LastWeatherReading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 5px;
  margin-right: 30px;

  strong {
    font-style: bold;
    font-size: 13px;
    color: #242424;
    text-align: center;
  }

  p {
    font-style: bold;
    font-size: 11px;
    color: #9897ad;
    text-align: center;
  }
`;
