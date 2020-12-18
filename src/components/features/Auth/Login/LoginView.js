import React from 'react';
import {View, Text} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from './LoginViewStyles';
import LoginForm from './components/Form/LoginForm';
import {vw, vh} from 'react-native-viewport-units';
const LoginView = (props) => {
  const navigation = useNavigation();
  //change this return with a if statement between register component or login Component
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
    navigation.push('Auth');
  };
  return (
    <View style={{height: '100%', width: '100%'}}>
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
                props.navigation.navigate('Register');
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
    </View>
  );
};

export default LoginView;
