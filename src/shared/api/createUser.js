import React from 'react';
import axios from 'axios';
import api from './api';

export const createUser = async (credentials) => {
  return await api.post('/create_user', credentials);
};
