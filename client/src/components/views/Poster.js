import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

const Poster = props => {
  return (
    <div>
      {props.landing ? (
        <Link to={`/movie/${props.movieId}`}>
          <Image src={props.image} alt={props.movieName} />
        </Link>
      ) : (
        <Image src={props.image} alt={props.castName} />
      )}
    </div>
  );
};

export default Poster;
