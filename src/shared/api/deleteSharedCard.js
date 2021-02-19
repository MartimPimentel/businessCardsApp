import api from './api';
import {getToken} from '../functions/functions';

export const deleteSharedCard = async (sharedUserId) => {
  return await getToken().then(async (token) => {
    return await api.post(
      '/deleteFromSharedCards',
      {requestedId: sharedUserId},
      {headers: {Token: token}},
    );
  });
};
