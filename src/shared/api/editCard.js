import React from 'react';
import axios from 'axios';
import api from './api';
import {getToken} from '../functions/functions';

export const editCard = async (body) => {
  return await getToken().then(async (token) => {
    return await api.post('/edit_card', body, {headers: {Token: token}});
  });
};
