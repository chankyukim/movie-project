import axios from 'axios';
import { API_URL } from '../config/config';

export default axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    languag: 'en-US',
  },
});
