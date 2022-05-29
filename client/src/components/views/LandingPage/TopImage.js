import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 100%;
  height: 70rem;
  /* background-image: url('https://picsum.photos/seed/picsum/1000/1000'); */
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4.8rem 3.6rem;

  display: flex;
  align-items: flex-end;

  div {
    color: #fff;
    max-width: 50%;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 2.2rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;

const TopImage = ({ title, overview, image }) => {
  return (
    <Section image={image}>
      <div>
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </Section>
  );
};

export default TopImage;
