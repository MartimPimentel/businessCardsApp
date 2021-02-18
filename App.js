import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import DrawerNavigator from './src/components/screens/auth/DrawerSideBar/DrawerNavigator/DrawerNavigator';
import {StatusBar} from 'react-native';
import NotAuth from './src/components/screens/notAuth/NotAuth';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import Spinner from './src/components/shared/Spinner/Spinner';
import {getToken} from './src/shared/functions/functions';
const Stack = createStackNavigator();
export default function App() {
  const [hasAuthKey, setHasAuthKey] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getToken().then((res) => {
      setHasAuthKey(res != null);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <StatusBar backgroundColor="#A9E2FD" />
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          initialRouteName={hasAuthKey ? 'Auth' : 'NotAuth'}>
          <Stack.Screen name="NotAuth" component={NotAuth} />
          <Stack.Screen name="Auth" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
