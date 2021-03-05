import api from './api';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {storeItems} from '../functions/functions';
import {useContext} from 'react';
import {AsyncContext} from '../providers/AsyncProvider';

export function useLoginHandler() {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const {setLoading, setError} = useContext(AsyncContext);
  return async function (credentials) {
    setLoading(true);
    if (netInfo.isConnected) {
      try {
        const res = await api.post('/verify_login', credentials);
        const token = res.data.token;
        console.log(token);
        storeItems('token', token);
        setLoading(false);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Auth'}],
          }),
        );
      } catch (error) {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        setError(
          errors,
          !errors?.error.match('Credentials')
            ? {
                cancelButtonTest: 'Ok',
                onClose: () => {
                  setError(null);
                },
              }
            : null,
        );
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
