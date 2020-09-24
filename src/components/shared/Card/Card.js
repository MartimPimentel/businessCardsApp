import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Styles from './CardStyles';
import {CardDrawRight, CardDrawLeft} from '../../../assets/backgrounds';
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
      </LinearGradient>
    </View>
  );
};
export default Card;
