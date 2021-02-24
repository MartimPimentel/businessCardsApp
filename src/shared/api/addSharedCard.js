import api from './api';
import {getFromStore} from '../functions/functions';

export const addSharedCard = async (userIdToAdd) => {
  return await getFromStore('token').then(async (token) => {
    return await api.post(
      '/cardById',
      {},
      {headers: {Token: token}, params: {userId: userIdToAdd}},
    );
  });
};
