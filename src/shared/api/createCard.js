import React from 'react';
import axios from 'axios';
import api from './api';
import {getToken} from '../functions/functions';

export const createCard = async (body) => {
  return await getToken().then(async (token) => {
    return await api.post('/create_card', body, {headers: {Token: token}});
  });
};
