import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  /* padding: 1.6rem 1.2em; */
`;

const Container = styled.div`
  max-width: 250rem;
  margin: 0 auto;
  padding: 1.6rem 2.4rem;

  h2 {
    margin-bottom: 1.8rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  border-top: 2px solid #aaa;
  border-left: 2px solid #aaa;

  div {
    border-right: 2px solid #aaa;
    border-bottom: 2px solid #aaa;
  }

  .th {
    font-size: 1rem;
    font-weight: 700;
    padding: 1.2rem 1.6rem;
  }

  .td {
    font-size: 1.4rem;
    background-color: #fff;
    padding: 1.2rem 1.6rem;
  }

  .title {
    grid-column: 2/4;
  }

  .runtime {
    grid-column: 2/4;
  }

  .vote_average {
    grid-column: 5/-1;
  }

  .vote_count {
    grid-column: 2/4;
  }
`;

const MovieInfo = ({ movie }) => {
  return (
    <Section>
      <Container>
        <h2>Movie Info</h2>
        <GridContainer>
          <div className="th">TITLE</div>
          <div className="td title">{movie.title}</div>
          <div className="th">RELEASE DATE</div>
          <div className="td">{movie.release_date}</div>
          <div className="th">REVENUE</div>
          <div className="td">{movie.revenue}</div>
          <div className="th">RUNTIME</div>
          <div className="td runtime">{movie.runtime}</div>
          <div className="th">VOTE AVERAGE</div>
          <div className="td vote_average">{movie.vote_average}</div>
          <div className="th">VOTE COUNT</div>
          <div className="td vote_count">{movie.vote_count}</div>
          <div className="th">STATUS</div>
          <div className="td">{movie.status}</div>
          <div className="th">POPULARITY</div>
          <div className="td">{movie.popularity}</div>
        </GridContainer>
      </Container>
    </Section>
  );
};

export default MovieInfo;
