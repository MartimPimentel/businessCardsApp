import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Styles from './CardStyles';
import {CardDrawRight, CardDrawLeft} from '../../../assets/backgrounds';
import {LILogo, FBLogo} from '../../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
const Card = ({data}) => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: '70%',
        }}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={{
            alignSelf: 'center',
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          colors={['#80C8FC', '#5350DB']}>
          <View
            style={{
              position: 'absolute',
              width: '30%',
              height: '100%',
              justifyContent: 'flex-end',
            }}>
            <CardDrawLeft />
          </View>
          <View
            style={{
              position: 'absolute',
              height: '50%',
              width: '70%',
              alignSelf: 'flex-end',
            }}>
            <CardDrawRight style={{alignSelf: 'flex-end'}} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};
export default Card;
