import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  form {
    margin-top: 2.4rem;
  }
`;

const FormBox = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormBox;
