import { axiosServer } from '../api/axios';
import { LOGOUT_URL } from '../config/config';
import useAuth from './useAuth';

const useLogout = () => {
  const { auth, setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    console.log('auth', auth);
    try {
      const response = await axiosServer(LOGOUT_URL, {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
