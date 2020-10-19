import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  LockAuth,
  UserAuth,
  RegisterBtn,
  LogInBtn,
} from '../../../../assets/icons';

const LoginView = () => {
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
    <View style={{height: '100%', width: '100%'}}>
      <LinearGradient
        style={{width: '100%', height: '100%', justifyContent: 'center'}}
        colors={['#80C8FC', '#5350DB']}>
        <Text
          style={{
            alignSelf: 'center',
            paddingBottom: '20%',
            fontFamily: 'Nunito-Bold',
            fontSize: 49,
            color: 'white',
          }}>
          Log in
        </Text>
        <View
          style={{
            width: '100%',
            height: '20%',
          }}>
          <View
            style={{
              width: '80%',
              height: '100%',
              borderBottomRightRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: 'white',
              marginBottom: '20%',
            }}>
            <View
              style={{
                height: '50%',
                width: '100%',
                borderTopRightRadius: 50,
                borderBottomWidth: 3,
                borderColor: '#C9C9C9',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View style={{width: '10%', height: '35%', marginLeft: '5%'}}>
                <UserAuth
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </View>
              <TextInput
                placeholder="username"
                style={{
                  marginLeft: '15%',
                  fontSize: 25,
                  width: '60%',
                }}></TextInput>
            </View>
            <View
              style={{
                height: '50%',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View style={{width: '10%', height: '40%', marginLeft: '5%'}}>
                <LockAuth
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </View>

              <TextInput
                placeholder="password"
                style={{
                  marginLeft: '15%',
                  fontSize: 25,
                  width: '60%',
                }}></TextInput>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                storeData('chave_de_entrada');
                navigation.push('Auth');
              }}
              width="150%"
              height="150%"
              preserveAspectRatio="meet"
              
              style={{
                marginLeft: '60%',
                marginBottom: '1.5%',
                activeOpacity: 0.01
              }}>
              <LogInBtn />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: '5%',
            width: '100%',
            flexDirection: 'row',
            marginTop: '2%',
            marginLeft: '2%',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Nunito-SemiBold',
              fontSize: 14,
            }}>
            Don't have an account yet ?
          </Text>
          <TouchableOpacity style={{marginLeft: '7%'}}>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: 14,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginView;
