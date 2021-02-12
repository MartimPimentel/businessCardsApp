import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import DrawerNavigator from './src/components/screens/auth/DrawerSideBar/DrawerNavigator/DrawerNavigator';
import {StatusBar} from 'react-native';
import NotAuth from './src/components/screens/notAuth/NotAuth';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import Spinner from './src/components/shared/Spinner/Spinner';
const Stack = createStackNavigator();
export default function App() {
  const [hasAuthKey, setHasAuthKey] = useState(false);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const key = await AsyncStorage.getItem('@AUTH_KEY');
      setHasAuthKey(key != null);

      return key;
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    setLoading(true);
    getData().then((key) => {
      setLoading(false);
      console.log(key);
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
