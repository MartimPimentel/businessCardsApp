import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Styles from './CardStyles';
import {
  CardDrawRight,
  CardDrawLeft,
  PictureBorder,
} from '../../../assets/backgrounds';
import {LILogo, FBLogo} from '../../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
const Card = ({data}) => {
  return (
    <View style={Styles.outsideContainer}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={Styles.backgroundStyles}
        colors={['#80C8FC', '#5350DB']}>
        <View style={Styles.leftDrawingsStyle}>
          <CardDrawLeft width="100%" height="100%" preserveAspectRatio="none" />
        </View>
        <View style={Styles.rightDrawingStyles}>
          <CardDrawRight
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          />
        </View>
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            flexDirection: 'column',
          }}>
          <View style={{height: '50%', width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                height: '100%',
                width: '50%',
                justifyContent: 'center',
              }}>
              <PictureBorder style={{alignSelf: 'center', marginRight: 80}} />
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
                backgroundColor: 'blue',
              }}></View>
          </View>
          <View style={{height: '50%', width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                height: '100%',
                width: '50%',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  marginBottom: 5,
                  fontFamily: 'Nunito-SemiBold',
                  color: 'white',
                  fontSize: 16,
                }}>
                Jane Dow
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginBottom: 5,
                  fontFamily: 'Nunito-Regular',
                  color: 'white',
                  fontSize: 12,
                }}>
                +1 123 456 789
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginBottom: 5,
                  fontFamily: 'Nunito-Regular',
                  color: 'white',
                  fontSize: 12,
                }}>
                Abc st, po 12345, NY, USA
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
                backgroundColor: 'black',
              }}></View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Card;
