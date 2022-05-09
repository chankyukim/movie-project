import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: white;
  margin-top: 3rem;
  padding: 3rem;

  text-align: center;
  font-size: 1.6rem;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  span {
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: #0095f6;
    font-weight: 600;
  }
`;

const BottomBox = ({ cta, linkText, link }) => {
  return (
    <Container>
      <span>{cta} </span>
      <Link to={link}>{linkText}</Link>
    </Container>
  );
};

export default BottomBox;
