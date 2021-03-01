import React from 'react';
import axios from 'axios';
import api from './api';
import {getToken} from '../functions/functions';

export const getCard = async () => {
  return await getToken().then(async (token) => {
    return await api.post('/get_card', {}, {headers: {Token: token}});
  });
};
