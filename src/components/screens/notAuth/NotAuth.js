import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginView from '../../features/Auth/Login/LoginView';
const NotAuth = () => {

  return (
    <LoginView></LoginView>
  );
};
export default NotAuth;
