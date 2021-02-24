import api from './api';
import {getFromStore} from '../functions/functions';

export const deleteSharedCard = async (sharedUserId) => {
  return await getFromStore('token').then(async (token) => {
    return await api.post(
      '/deleteFromSharedCards',
      {requestedId: sharedUserId},
      {headers: {Token: token}},
    );
  });
};
