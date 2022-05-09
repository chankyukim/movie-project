import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 9px 1.2rem 9px 1.2rem;
  /* background-color: #0095f6; */
  background-color: ${props => (props.disabled ? '#EFEFEF' : '#0095f6')};
  border: none;
  color: ${props => (props.disabled ? 'black' : 'white')};
  /* color: white; */
  font-size: 1.4rem;
  border-radius: 5px;
  margin-top: 1.6rem;
  /* cursor: pointer; */
`;

export default Button;
