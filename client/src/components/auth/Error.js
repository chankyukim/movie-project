import React from 'react';
import styled, { css } from 'styled-components';

const Message = styled.p`
  ${props =>
    props.validEmail &&
    props.validName &&
    props.validPwd &&
    props.validMatch &&
    css`
      display: none;
    `}

  ${props =>
    !props.validName &&
    !props.validEmail &&
    !props.validPwd &&
    !props.validMatch &&
    css`
      color: red;
    `}
  /* display: ${props => (props.validName ? 'none' : '')};
  color: ${props => (props.validName ? 'black' : 'red')}; */
  font-size: 1.2rem;
  padding: 3px 0;
`;

const Error = ({ ...props }) => {
  return (
    <Message
      validName={props.validName}
      validEmail={props.validEmail}
      validPwd={props.validPwd}
      validMatch={props.validMatch}
    >
      {props.ErrorText}
    </Message>
  );
};

export default Error;
