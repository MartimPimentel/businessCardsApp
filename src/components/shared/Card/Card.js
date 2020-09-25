import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Styles from './CardStyles';
import {
  CardDrawRight,
  CardDrawLeft,
  PictureBorder,
} from '../../../assets/backgrounds';
import {
  LILogo,
  FBLogo,
  CompanyLogo,
  AddressIcon,
  PhoneIcon,
  NameIcon,
} from '../../../assets/icons';
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
                width: '35%',
                justifyContent: 'center',
              }}>
              <PictureBorder style={{alignSelf: 'center'}} />
            </View>
            <View
              style={{
                height: '100%',
                width: '65%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  marginRight: 15,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginRight: 15,
                    fontFamily: 'Nunito-Regular',
                    color: 'white',
                    fontSize: 12,
                  }}>
                  Company Name
                </Text>
                <CompanyLogo />
              </View>
            </View>
          </View>
          <View style={{height: '50%', width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                height: '100%',
                width: '50%',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <NameIcon />
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Nunito-SemiBold',
                    color: 'white',
                    fontSize: 16,
                  }}>
                  Jane Dow
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <PhoneIcon />
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Nunito-Regular',
                    color: 'white',
                    fontSize: 12,
                  }}>
                  +1 123 456 789
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <AddressIcon />
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Nunito-Regular',
                    color: 'white',
                    fontSize: 12,
                  }}>
                  Abc st, po 12345, NY, USA
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <FBLogo style={{marginRight: 15, marginTop: 10}} />
              <LILogo style={{marginRight: 15, marginTop: 15}} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Card;
