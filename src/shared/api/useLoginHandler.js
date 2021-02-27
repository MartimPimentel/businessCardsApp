import api from './api';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {storeItems} from '../functions/functions';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncReducer';
import {useDispatch} from 'react-redux';

export function useLoginHandler() {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return async function (credentials) {
    dispatch(asyncActionStart());
    if (netInfo.isConnected) {
      try {
        const res = await api.post('/verify_login', credentials);
        const token = res.data.token;
        console.log(token);
        storeItems('token', token);
        dispatch(asyncActionFinish());
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Auth'}],
          }),
        );
        dispatch(asyncActionFinish());
      } catch (error) {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        dispatch(
          asyncActionError(
            errors,
            !errors?.error.match('Credentials')
              ? {
                  cancelButtonTest: 'Ok',
                  onClose: () => {
                    dispatch(asyncActionError(null));
                  },
                }
              : null,
          ),
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
