import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL } from '../../../config/config';
import GridCards from '../GridCards';
import Poster from '../Poster';

const Section = styled.section`
  padding: 1.6rem 3.6rem;
`;

const Container = styled.section`
  max-width: 250rem;
  margin: 0 auto;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.6rem;

  button {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: #0095f6;
    color: #fff;
    padding: 6px 1.6rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
      0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: all 0.3s;
    cursor: pointer;
  }

  button:hover {
    background-color: #0080d4;
  }
`;

const MainSection = ({ movies, loadMoreItem }) => {
  return (
    <Section>
      <Container>
        <h2>Movies by latest</h2>
        <hr />
        <GridCards>
          {movies &&
            movies.map(movie => (
              <Poster
                landing
                key={movie.id}
                movieId={movie?.id}
                image={movie?.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                movieName={movie?.original_title}
                rating={movie?.rating}
              />
            ))}
        </GridCards>

        <ButtonBox>
          <button onClick={loadMoreItem}>LOAD MORE</button>
        </ButtonBox>
      </Container>
    </Section>
  );
};

export default MainSection;
