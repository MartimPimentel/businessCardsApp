import 'react-native-gesture-handler';
<<<<<<< HEAD
import React from 'react';
import DrawerNavigator from './src/components/screens/DrawerSideBar/DrawerNavigator/DrawerNavigator';
import LoginView from './src/components/features/Auth/Login/LoginView';
import RegisterView from './src/components/features/Auth/Register/RegisterView';
import {StatusBar} from 'react-native';

=======
import React, {useEffect, useState} from 'react';
import DrawerNavigator from './src/components/screens/auth/DrawerSideBar/DrawerNavigator/DrawerNavigator';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import NotAuth from './src/components/screens/notAuth/NotAuth';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
>>>>>>> b501c2c8f350b71966b962c01670ee9e855fc1f7
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
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <ActivityIndicator size={100} color="#8AB1F2" />
    </View>
  ) : (
    <>
      <StatusBar backgroundColor="#A9E2FD" />
<<<<<<< HEAD
      <LoginView />
=======
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          initialRouteName={hasAuthKey ? 'Auth' : 'NotAuth'}>
          <Stack.Screen name="NotAuth" component={NotAuth} />
          <Stack.Screen name="Auth" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
>>>>>>> b501c2c8f350b71966b962c01670ee9e855fc1f7
    </>
  );
}
