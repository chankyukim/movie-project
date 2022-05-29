import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { FAVORITE_URL } from '../../../config/config';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.6rem 2.4rem;

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

const TopBtn = () => {
  // useEffect(() => {
  //   async function fetchFavorite() {
  //     try {
  //       const response = await axios.post(
  //         FAVORITE_URL,
  //         // JSON.stringify({ userFrom, movieId }),
  //         {
  //           headers: { 'Content-Type': 'application/json' },
  //           withCredentials: true,
  //         }
  //       );
  //       return response.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchFavorite() //
  //     .then(response => console.log(response));
  // }, []);

  return (
    <Container>
      <button>Add to Favorite 0</button>
    </Container>
  );
};

export default TopBtn;
