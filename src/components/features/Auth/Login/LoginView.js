import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from './LoginViewStyles';
import LoginForm from './components/Form/LoginForm';
import {vw, vh} from 'react-native-viewport-units';
import {CommonActions} from '@react-navigation/native';
import {login} from '../../../../shared/api/login';
import Modal from '../../../shared/Modal/Modal';
import SInfo from 'react-native-sensitive-info';

const storeData = async (token) => {
  await SInfo.setItem('token', token, {
    sharedPreferencesName: 'bussinessCards',
    keychainService: 'bussinessCards',
  });
};

const LoginView = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(null);

  const handleLogin = (data) => {
    login(data)
      .then((res) => {
        console.log(res.data);
        setError(null);
        storeData(res.data.token);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Auth'}],
          }),
        );
      })
      .catch((error) => {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        setError(errors);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <LinearGradient
        style={{width: '100%', height: '100%', justifyContent: 'center'}}
        colors={['#80C8FC', '#5350DB']}>
        <Text style={Styles.signUpText}>Log in</Text>

        <ScrollView>
          <LoginForm onClickToLogin={handleLogin} dbError={error} />
          <Modal
            isVisible={
              error &&
              error.error != 'Credentials-001' &&
              error.error != 'Credentials-002'
            }
            cancelButtonTest="Ok"
            headerStyles={{width: '60%', height: '80%', top: '10%'}}
            onClose={() => setError(null)}
            header={<Text style={{fontSize: 25}}>Error</Text>}
            body={
              error && (
                <>
                  <Text>{error.message}</Text>
                  <Text>Please try again.</Text>
                </>
              )
            }
          />
          <View style={{width: 150 * (vh / vw)}}>
            <TouchableOpacity
              style={Styles.changeToLoginContainer}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{name: 'Register'}],
                  }),
                );
              }}>
              <Text style={[Styles.changeToLoginTextStyles, {color: 'white'}]}>
                Don't have an account yet ?
              </Text>
              <Text
                style={[Styles.changeToLoginTextStyles, {marginLeft: '2%'}]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default LoginView;
