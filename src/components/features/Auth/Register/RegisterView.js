import React, {useEffect, useState} from 'react';
import {Text, Keyboard} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './RegisterViewStyles';
import {useNavigation} from '@react-navigation/native';
import RegisterForm from './components/Form/RegisterForm';
import {CommonActions} from '@react-navigation/native';
import {createUser} from '../../../../shared/api/createUser';
import {useNetInfo} from '@react-native-community/netinfo';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../../shared/async/asyncReducer';
import {useDispatch} from 'react-redux';

const RegisterView = (props) => {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRegister = (data) => {
    //console.log(data);
    dispatch(asyncActionStart());
    if (netInfo.isConnected) {
      createUser(data)
        .then((res) => {
          console.log(res.data);
          dispatch(asyncActionFinish());
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Login'}],
            }),
          );
        })
        .catch((error) => {
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
        });
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
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <LinearGradient
        style={{width: '100%', height: '100%', justifyContent: 'center'}}
        colors={['#80C8FC', '#5350DB']}>
        <Text style={Styles.signUpText}>Sign up</Text>

        <ScrollView>
          <RegisterForm onClickToRegister={handleRegister} />
          <TouchableOpacity
            style={Styles.changeToLoginContainer}
            onPress={() => {
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'Login'}],
                }),
              );
            }}>
            <Text style={[Styles.changeToLoginTextStyles, {color: 'white'}]}>
              Have an account already ?
            </Text>
            <Text style={[Styles.changeToLoginTextStyles, {marginLeft: '2%'}]}>
              Log in
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default RegisterView;
