import api from './api';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncReducer';
import {useDispatch} from 'react-redux';

export function useRegisterHandler() {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return async function (credentials) {
    dispatch(asyncActionStart());
    if (netInfo.isConnected) {
      try {
        await api.post('/create_user', credentials);
        dispatch(asyncActionFinish());
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Login'}],
          }),
        );
      } catch (error) {
        const errors = JSON.parse(error.request.response);
        dispatch(
          asyncActionError(
            errors,
            !errors?.error.match('Signup-001')
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
