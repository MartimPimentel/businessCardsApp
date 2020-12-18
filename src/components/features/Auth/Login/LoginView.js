import React, {useEffect} from 'react';
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
import {useIsFocused} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const LoginView = (props) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@AUTH_KEY', value);
    } catch (e) {
      // saving error
    }
  };
  const handleLogin = (data) => {
    console.log(data);
    storeData('chave_de_entrada');
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Auth'}],
      }),
    );
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
          <LoginForm onClickToLogin={handleLogin} />
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
