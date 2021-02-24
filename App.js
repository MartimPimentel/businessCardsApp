import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import DrawerNavigator from './src/components/screens/auth/DrawerSideBar/DrawerNavigator/DrawerNavigator';
import {StatusBar} from 'react-native';
import NotAuth from './src/components/screens/notAuth/NotAuth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Spinner from './src/components/shared/Spinner/Spinner';
import {getFromStore} from './src/shared/functions/functions';
import {Provider} from 'react-redux';
import {configureStore} from './src/shared/store/configureStore';
import ModalManager from './src/components/shared/Modal/ModalManager';
import SpinnerManager from './src/components/shared/Spinner/SpinnerManager';

const store = configureStore();
const base64url = require('base64url');
const Stack = createStackNavigator();
export default function App() {
  const [hasAuthKey, setHasAuthKey] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getFromStore('token').then((res) => {
      if (res != null) {
        const splitted = res.split('.')[1];
        //Expires one day before exp date
        const expDate = JSON.parse(base64url.decode(splitted)).exp - 86400;
        if (expDate < Math.round(Date.now() / 1000)) {
          setHasAuthKey(false);
        } else {
          setHasAuthKey(true);
        }
      } else {
        setHasAuthKey(false);
      }
      setLoading(false);
    });
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <Provider store={store}>
      <StatusBar backgroundColor="#A9E2FD" />

      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          initialRouteName={hasAuthKey ? 'Auth' : 'NotAuth'}>
          <Stack.Screen name="NotAuth" component={NotAuth} />
          <Stack.Screen name="Auth" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      <ModalManager />
      <SpinnerManager />
    </Provider>
  );
}
