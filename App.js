import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigator from './src/components/screens/DrawerSideBar/DrawerNavigator/DrawerNavigator';
import {StatusBar} from 'react-native';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#A9E2FD" />
      <DrawerNavigator />
    </>
  );
}
