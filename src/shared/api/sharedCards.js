import React from 'react';
import axios from 'axios';
import api from './api';
import {getFromStore} from '../functions/functions';

export const sharedCards = async () => {
  return await getFromStore('token').then(async (token) => {
    return await api.post('/sharedCards', {}, {headers: {Token: token}});
  });
};
