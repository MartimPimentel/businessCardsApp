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
  IGLogo,
  EmailIcon,
} from '../../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
const Card = ({data}) => {
  const {
    phoneNumber,
    address,
    companyName,
    name,
    profilePhoto,
    companyLogo,
    facebookLink,
    instagramLink,
    linkedInLink,
    email,
  } = data;
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
              <Image
                source={UnknownUser}
                style={Styles.image(!!profilePhoto)}
              />
            </View>
            <View style={Styles.fullInfoView}>
              <View style={[Styles.infoView(!!name), {left: -2}]}>
                <NameIcon />
                <Text style={Styles.nameText}>{name}</Text>
              </View>

              <View style={Styles.infoView(!!phoneNumber)}>
                <PhoneIcon />
                <Text style={Styles.infoText}>{phoneNumber}</Text>
              </View>

              <View style={Styles.infoView(!!address)}>
                <AddressIcon />
                <Text style={Styles.infoText}>{address}</Text>
              </View>
              <View style={Styles.infoView(!!email)}>
                <EmailIcon />
                <Text style={Styles.infoText}>{email}</Text>
              </View>
            </View>
          </View>
          <View style={Styles.rightView}>
            <View style={Styles.companyView}>
              <Text style={Styles.companyText(!!companyName)}>
                {companyName}
              </Text>

              <CompanyLogo style={{display: companyLogo ? 'flex' : 'none'}} />
            </View>
            <View style={Styles.logoView}>
              <FBLogo style={{display: facebookLink ? 'flex' : 'none'}} />
              <IGLogo
                style={{marginTop: 5, display: instagramLink ? 'flex' : 'none'}}
              />
              <LILogo
                style={{marginTop: 5, display: linkedInLink ? 'flex' : 'none'}}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Card;
