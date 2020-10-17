import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {LockAuth, UserAuth, RegisterBtn} from '../../../../assets/icons';

const RegisterView = () => {
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
          Sign up
        </Text>
        <View
          style={{
            width: '100%',
            height: '30%',
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
                height: '33%',
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
                height: '33%',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 3,
                borderColor: '#C9C9C9',
              }}>
              <View style={{width: '10%', height: '40%', marginLeft: '5%'}}>
                <LockAuth width="100%"
                  height="100%"
                  preserveAspectRatio="meet"/>
              </View>

              <TextInput
                placeholder="password"
                style={{
                  marginLeft: '15%',
                  fontSize: 25,
                  width: '60%',
                }}></TextInput>
            </View>
            <View
              style={{
                height: '33%',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomRightRadius: 50,
              }}>
              <View style={{width: '10%', height: '40%', marginLeft: '5%'}}>
                <LockAuth width="100%"
                  height="100%"
                  preserveAspectRatio="meet"/>
              </View>
              <TextInput
                placeholder="confirm password"
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
            <RegisterBtn
              width="100%"
              height="100%"
              preserveAspectRatio="meet"
              style={{marginLeft: '60%', marginBottom: '1.5%'}}
            />
          </View>
        </View>
        <View style={{height: '5%', width: '100%', flexDirection: 'row', marginTop: '2%', marginLeft: '2%'}}>
          <Text style={{color: 'white', fontFamily: 'Nunito-SemiBold', fontSize: 14}}>Have an account already ?</Text>
          <Text style={{fontFamily: 'Nunito-SemiBold', fontSize: 14, marginLeft: '2%'}}>Log in </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default RegisterView;
