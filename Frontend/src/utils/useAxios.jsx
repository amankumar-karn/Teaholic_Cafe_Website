import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const baseURL = 'http://127.0.0.1:8000/api';

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${authTokens?.access}`,
    },
  });

  axiosInstance.interceptors.request.use(async req => {
    const token = authTokens?.access;

    if (!token) return req;

    // Decode the token to check for expiration
    const decodedToken = jwt_decode(token);
    const isExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    // If the token is expired, try refreshing it
    try {
      const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh,
      });

      // Update tokens in local storage and context
      localStorage.setItem('authTokens', JSON.stringify(response.data));
      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));

      req.headers.Authorization = `Bearer ${response.data.access}`;
    } catch (error) {
      console.error('Error refreshing token:', error.response?.data || error.message);
    }

    return req;
  });

  return axiosInstance;
};

export default useAxios;
