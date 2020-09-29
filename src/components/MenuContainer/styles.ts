import styled from 'styled-components';

export const SectionZero = styled.div`
  max-height: 885px;
  display: flex;
  flex: 1;
  margin-right: 60px;

  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  margin: 0 auto;

  padding: 0.7rem 2rem;
  overflow: hidden;
  z-index: 1;
  width: 64px;

  left: 42px;

  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;

  position: fixed;
  top: 14px;
  bottom: 55px;

  background: #b0c6a1;
  border-radius: 50px;

  button {
    padding: 5px;
    background: transparent;
    border: 0;
    border-radius: 50px;
    padding-top: 60px;

    svg {
      color: #ffffff;
      width: 28px;
      height: 28px;
    }
  }
`;
