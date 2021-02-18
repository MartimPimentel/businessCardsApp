import React from 'react';
import axios from 'axios';
import api from './api';
import {getToken} from '../functions/functions';

/* export async function getReceivedCards() {
  try {
    const {data: response} = await api.get('/');
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }s
} */
/* export const getReceivedCards = async () => {
  try {
    const resp = await api.get('/');
    return resp.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}; */
export const sharedCards = async () => {
  return await getToken().then(async (token) => {
    return await api.post('/sharedCards', {}, {headers: {Token: token}});
  });
};
