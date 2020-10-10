import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
const NotAuth = () => {
  const navigation = useNavigation();
  //change this return with a if statement between register component or login Component
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@AUTH_KEY', value);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          height: 60,
          width: 80,
          backgroundColor: 'orange',
          justifyContent: 'center',
        }}
        onPress={() => {
          storeData('chave_de_entrada');
          navigation.navigate('Auth');
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          Login/Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default NotAuth;
