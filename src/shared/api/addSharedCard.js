import api from './api';
import {getToken} from '../functions/functions';

export const addSharedCard = async (userIdToAdd) => {
  return await getToken().then(async (token) => {
    return await api.post(
      '/cardById',
      {},
      {headers: {Token: token}, params: {userId: userIdToAdd}},
    );
  });
};
