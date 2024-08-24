import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );
  const [user, setUser] = useState(() =>
    authTokens ? jwtDecode(authTokens.access) : null
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
  }, [authTokens]);

  const registerUser = async (email, username, password, password2) => {
    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        email,
        username,
        password,
        password2,
      });
      console.log('Registration successful:', response.data);
      navigate('/login');
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error.response.data);
      return { success: false, error: error.response.data };
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        email,
        password,
      });
      const { access, refresh } = response.data;
      localStorage.setItem('authTokens', JSON.stringify(response.data));
      setAuthTokens(response.data);
      setUser(jwtDecode(access));
      navigate('/');
      return { success: true };
    } catch (error) {
      console.error('Login error:', error.response.data);
      return { success: false, error: error.response.data };
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('authTokens');
    setAuthTokens(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
