import React from 'react';
import axios from 'axios';
import api from './api';
import {getToken} from '../functions/functions';

export const changeEmail = async (body) => {
  return await getToken().then(async (token) => {
    return await api.post('/change_email', body, {headers: {Token: token}});
  });
};
