import api from './api';
import {useNavigation} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {getFromStore, parseError} from '../functions/functions';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncReducer';
import {useDispatch} from 'react-redux';

export function useDeleteUser() {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return async function () {
    dispatch(asyncActionStart());
    if (netInfo.isConnected) {
      try {
        const res = await getFromStore('token').then(async (token) => {
          return await api.post(
            '/delete_user',
            {},
            {
              headers: {Token: token},
            },
          );
        });
        dispatch(asyncActionFinish());
        navigation.navigate('Settings');
        dispatch(asyncActionFinish());
      } catch (error) {
        dispatch(
          asyncActionError(parseError(error, navigation), {
            cancelButtonTest: 'Retry',
            onClose: () => {
              dispatch(asyncActionError(null));
            },
          }),
        );
      }
    } else {
      dispatch(
        asyncActionError(
          {
            message:
              'You are currently offline. Go online to be able to login.',
          },
          {
            cancelButtonTest: 'Ok',
            onClose: () => {
              dispatch(asyncActionError(null));
            },
          },
        ),
      );
    }
  };
}
