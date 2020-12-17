import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from './LoginViewStyles';
import {LockAuth, UserAuth, LogInBtn} from '../../../../assets/icons';

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
  return (
    <View style={{height: '100%', width: '100%'}}>
      <LinearGradient
        style={{width: '100%', height: '100%', justifyContent: 'center'}}
        colors={['#80C8FC', '#5350DB']}>
        <Text style={Styles.signUpText}>Log in</Text>
        <View style={Styles.outsideContainer}>
          <View style={Styles.formContainer}>
            <View
              style={[
                Styles.inputContainer,
                {borderTopRightRadius: 50, borderBottomWidth: 3},
              ]}>
              <View style={Styles.iconsContainer}>
                <UserAuth
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </View>
              <TextInput
                placeholder="username"
                style={Styles.textInputStyles}></TextInput>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.iconsContainer}>
                <LockAuth
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </View>

              <TextInput
                placeholder="password"
                style={Styles.textInputStyles}></TextInput>
            </View>
          </View>
          <View style={Styles.signInButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                storeData('chave_de_entrada');
                navigation.push('Auth');
              }}
              style={Styles.signInButtonStyles}>
              <LogInBtn />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.changeToRegisterContainer}>
          <Text style={[Styles.changeToRegisterTextStyles, {color: 'white'}]}>
            Don't have an account yet ?
          </Text>
          <TouchableOpacity
            style={{marginLeft: '7%'}}
            onPress={() => {
              props.navigation.navigate('Register');
            }}>
            <Text style={Styles.changeToRegisterTextStyles}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginView;
