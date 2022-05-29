import axios from 'axios';
import { API_URL, BASE_URL } from '../config/config';

export const axiosApi = axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    languag: 'en-US',
  },
});

export const axiosServer = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
