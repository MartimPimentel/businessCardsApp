import React from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;
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
  UnknownUser,
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
        <View style={Styles.fullCardView}>
          <View style={Styles.leftView}>
            <View style={Styles.imageView}>
              <Image source={UnknownUser} style={Styles.image} />
            </View>
            <View style={Styles.fullInfoView}>
              <View style={Styles.infoView}>
                <NameIcon />
                <Text style={Styles.nameText}>Jane Dow</Text>
              </View>

              <View style={Styles.infoView}>
                <PhoneIcon />
                <Text style={Styles.infoText}>+1 123 456 789</Text>
              </View>

              <View style={Styles.infoView}>
                <AddressIcon />
                <Text style={Styles.infoText}>Abc st, po 12345, NY, USA</Text>
              </View>
            </View>
          </View>
          <View style={Styles.rightView}>
            <View style={Styles.companyView}>
              <Text style={Styles.companyText}>Company Name</Text>
              <CompanyLogo />
            </View>
            <View style={Styles.logoView}>
              <FBLogo style={{marginRight: 15}} />
              <LILogo style={{marginRight: 15, marginTop: 5}} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Card;
