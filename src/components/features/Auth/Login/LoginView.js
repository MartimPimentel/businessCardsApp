import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Styles from './LoginViewStyles';
import LoginForm from './components/Form/LoginForm';
import {vw, vh} from 'react-native-viewport-units';
import {CommonActions} from '@react-navigation/native';
import {login} from '../../../../shared/api/login';
import Modal from '../../../shared/Modal/Modal';
import {useNetInfo} from '@react-native-community/netinfo';
import {storeItems} from '../../../../shared/functions/functions';

const LoginView = () => {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const [error, setError] = useState(null);

  const handleLogin = (data) => {
    if (netInfo.isConnected) {
      login(data)
        .then((res) => {
          console.log(res.data);
          setError(null);
          storeItems('token', res.data.token);
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
    } else {
      setError({
        message: 'You are currently offline. Go online to be able to login.',
      });
    }
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
                  {error.error && <Text>Please try again.</Text>}
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
