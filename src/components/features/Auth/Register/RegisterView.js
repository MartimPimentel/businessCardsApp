import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {LockAuth, UserAuth, RegisterBtn} from '../../../../assets/icons';
import Styles from './RegisterViewStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const RegisterView = (props) => {
  const navigation = useNavigation();
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
        <Text style={Styles.signUpText}>Sign up</Text>
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
            <View style={[Styles.inputContainer, {borderBottomWidth: 3}]}>
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
            <View
              style={[Styles.inputContainer, {borderBottomRightRadius: 50}]}>
              <View style={Styles.iconsContainer}>
                <LockAuth
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </View>
              <TextInput
                placeholder="confirm password"
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
              <RegisterBtn />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={Styles.changeToLoginContainer}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text style={[Styles.changeToLoginTextStyles, {color: 'white'}]}>
            Have an account already ?
          </Text>
          <Text style={[Styles.changeToLoginTextStyles, {marginLeft: '2%'}]}>
            Log in
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default RegisterView;
