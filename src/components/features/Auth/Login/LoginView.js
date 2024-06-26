import React from 'react';
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
import {useSelector} from 'react-redux';
import {useLoginHandler} from '../../../../shared/api/useLoginHandler';

const LoginView = () => {
  const navigation = useNavigation();
  const modal = useSelector((state) => state.modals);
  const handleLogin = useLoginHandler();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <LinearGradient
        style={{width: '100%', height: '100%', justifyContent: 'center'}}
        colors={['#80C8FC', '#5350DB']}>
        <Text style={Styles.signUpText}>Log in</Text>

        <ScrollView>
          <LoginForm disabled={!modal} onClickToLogin={handleLogin} />
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
