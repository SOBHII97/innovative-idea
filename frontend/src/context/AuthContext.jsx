import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from '../utils/axiosConfig';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkAuthStatus();
    }
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('/admin/me');
      setUser(response.data);
      setIsAdmin(true);
    } catch (error) {
      localStorage.removeItem('token');
      setIsAdmin(false);
      setUser(null);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post('/admin/login', { email, password });

      const { token, admin } = response.data;
      localStorage.setItem('token', token);
      setUser(admin);
      setIsAdmin(true);
      toast.success('Login successful');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAdmin(false);
    setUser(null);
    toast.success('Logged out successfully');
  };

  const isOwner = () => isAdmin;

  return (
    <AuthContext.Provider value={{ isAdmin, user, login, logout, isOwner, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);