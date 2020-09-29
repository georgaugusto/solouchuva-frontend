import styled from 'styled-components';

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 172px;
  padding-right: 31px;

  /* > img {
    height: 40px;
    margin-right: auto;
  } */

  > strong {
    margin-right: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    letter-spacing: 0.694286px;

    color: #242424;
  }

  button {
    margin-left: 0;
    background: transparent;
    border: 0;

    svg {
      color: #242424;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 28px;

  button {
    margin-right: 23px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #242424;
    }

    strong {
      color: #242424;
    }
  }
`;
