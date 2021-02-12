import React from 'react';
import axios from 'axios';
import api from './api';

/* export async function getReceivedCards() {
  try {
    const {data: response} = await api.get('/');
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }s
} */
export const getReceivedCards = async () => {
  try {
    const resp = await api.get('/');
    return resp.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
