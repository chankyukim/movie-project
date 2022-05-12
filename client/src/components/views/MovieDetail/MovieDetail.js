import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import { API_URL, IMAGE_BASE_URL } from '../../../config/config';
import GridCards from '../GridCards';
import TopImage from '../LandingPage/TopImage';
import Poster from '../Poster';
import BottomBtn from './BottomBtn';
import MovieInfo from './MovieInfo';
import TopBtn from './TopBtn';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const [actorToggle, setActorToggle] = useState(false);

  const abortController = new AbortController();

  async function fetchMovie(endPoint) {
    try {
      const response = await axios.get(endPoint, {
        signal: abortController.signal,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const END_POINT_INFO = `${API_URL}/movie/${movieId}`;
    let isMounted = true;

    fetchMovie(END_POINT_INFO) //
      .then(response => {
        // console.log('info', response);
        isMounted && setMovie(response);
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const END_POINT_CREDIT = `${API_URL}/movie/${movieId}/credits`;
    let isMounted = true;

    fetchMovie(END_POINT_CREDIT) //
      .then(response => {
        console.log('credit', response);
        isMounted && setCredit(response);
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  const toggleActorView = () => {
    setActorToggle(!actorToggle);
  };

  return (
    <div>
      <TopImage
        title={movie.title}
        overview={movie.overview}
        image={`${IMAGE_BASE_URL}w1280/${movie.backdrop_path}`}
      />
      <TopBtn />
      <MovieInfo movie={movie} />
      <BottomBtn toggleActorView={toggleActorView} />
      {actorToggle && (
        <GridCards>
          {credit &&
            credit?.cast?.map(actor => (
              <Poster
                key={actor.cast_id}
                castName={actor.name}
                image={`${IMAGE_BASE_URL}w1280/${actor.profile_path}`}
              />
            ))}
        </GridCards>
      )}
    </div>
  );
};

export default MovieDetail;
