import api from './api';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {useContext} from 'react';
import {AsyncContext} from '../providers/AsyncProvider';

export function useRegisterHandler() {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const {setLoading, setError} = useContext(AsyncContext);
  return async function (credentials) {
    setLoading(true);
    if (netInfo.isConnected) {
      try {
        await api.post('/create_user', credentials);
        setLoading(false);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Login'}],
          }),
        );
      } catch (error) {
        const errors = JSON.parse(error.request.response);
        setError(
          errors,
          !errors?.error.match('Signup-001')
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
