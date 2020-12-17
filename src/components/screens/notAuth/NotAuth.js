import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginView from '../../features/Auth/Login/LoginView';
import RegisterView from '../../features/Auth/Register/RegisterView';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const NotAuth = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Register" component={RegisterView} />
    </Stack.Navigator>
  );
};
export default NotAuth;
