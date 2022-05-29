import { axiosServer } from '../api/axios';
import { REFRESH_URL } from '../config/config';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosServer.get(REFRESH_URL, {
      withCredentials: true,
    });

    setAuth(prev => {
      console.log('prev', JSON.stringify(prev));
      console.log('accessToken', response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
