import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

const GridCards = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default GridCards;
