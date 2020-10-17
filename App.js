import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigator from './src/components/screens/DrawerSideBar/DrawerNavigator/DrawerNavigator';
import LoginView from './src/components/features/Auth/Login/LoginView';
import RegisterView from './src/components/features/Auth/Register/RegisterView';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#A9E2FD" />
      <LoginView />
    </>
  );
}
