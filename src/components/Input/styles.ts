import styled, { css } from 'styled-components';

import Tooltip from '../tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #F5F5F5;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #b0c6a1;
      border-color: #b0c6a1;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #b0c6a1;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #242424;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #242424;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
