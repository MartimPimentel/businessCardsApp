import React from 'react';
import LoginView from '../../features/Auth/Login/LoginView';
import RegisterView from '../../features/Auth/Register/RegisterView';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const NotAuth = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Register" component={RegisterView} />
    </Stack.Navigator>
  );
};
export default NotAuth;
