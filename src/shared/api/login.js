import React from 'react';
import axios from 'axios';
import api from './api';

export const login = async (credentials) => {
  return await api.post('/verify_login', credentials);
};
