import styled from 'styled-components';
import { shade } from 'polished';

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

  background: #ffffff;
  border: 1px solid #e6e5f2;
  box-sizing: border-box;
  border-radius: 28px;
`;

export const WeatherStationContentHeader = styled.div`
  padding: 20px 30px;

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 28px;
  }

  > p {
    margin-top: 8px;
    color: #e7b46c;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #e7b46c;
      margin: 0 8px;
    }
  }
`;

export const WeatherStationContent = styled.div`
  margin: 30px 30px 0 30px;
`;

export const GridContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  // margin-bottom: 17px;
`;

export const Calendar = styled.aside`
  display: flex;

  margin-right: 40px;
  width: 100%;
  max-width: 380px;

  .DayPicker {
    background: #ffffff;
    border: 1px solid #e6e5f2;
    box-sizing: border-box;
    border-radius: 28px;
    padding-right: 15px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #8a8786;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#8A8786')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #b0c6a1 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
