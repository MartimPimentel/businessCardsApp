import api from './api';
import {useNavigation} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {getFromStore, parseError} from '../functions/functions';
import {useContext} from 'react';
import {AsyncContext} from '../providers/asyncProvider';

export function useDeleteUser() {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const {setLoading, setError} = useContext(AsyncContext);
  return async function () {
    setLoading(true);
    if (netInfo.isConnected) {
      try {
        await getFromStore('token').then(async (token) => {
          return await api.post(
            '/delete_user',
            {},
            {
              headers: {Token: token},
            },
          );
        });
        setLoading(false);
        navigation.navigate('Settings');
      } catch (error) {
        setError(parseError(error, navigation), {
          cancelButtonTest: 'Retry',
          onClose: () => {
            setError(null);
          },
        });
      }
    } else {
      setError(
        {
          message: 'You are currently offline. Go online to be able to login.',
        },
        {
          cancelButtonTest: 'Ok',
          onClose: () => {
            setError(null);
          },
        },
      );
    }
  };
}
