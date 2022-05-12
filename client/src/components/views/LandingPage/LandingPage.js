import React, { useEffect, useRef, useState } from 'react';
import axios from '../../../api/axios';
import { API_URL, IMAGE_BASE_URL } from '../../../config/config';
import Header from './Header';
import MainSection from './MainSection';
import TopImage from './TopImage';

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [topImage, setTopImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const abortController = new AbortController();

  const fetchMovies = async endPoint => {
    try {
      const response = await axios.get(endPoint, {
        signal: abortController.signal,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const END_POINT = `${API_URL}movie/popular?page=1`;

    fetchMovies(END_POINT) //
      .then(response => {
        isMounted && setMovies([...response.results]);
        isMounted && setTopImage(response.results[0]);
        setCurrentPage(response.page);
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  const loadMoreItem = () => {
    const END_POINT = `${API_URL}movie/popular?page=${currentPage + 1}`;

    fetchMovies(END_POINT) //
      .then(response => {
        setMovies([...movies, ...response.results]);
        setCurrentPage(currentPage + 1);
      });
  };

  return (
    <div>
      <Header />
      {topImage && (
        <TopImage
          title={topImage.original_title}
          overview={topImage.overview}
          image={`${IMAGE_BASE_URL}w1280/${topImage.backdrop_path}`}
        />
      )}
      <MainSection loadMoreItem={loadMoreItem} movies={movies} />
    </div>
  );
};

export default LandingPage;
