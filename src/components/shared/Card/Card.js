import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Styles from './CardStyles';
import {CardDrawRight, CardDrawLeft} from '../../../assets/backgrounds';
import {
  LILogo,
  FBLogo,
  PhoneIcon,
  NameIcon,
  IGLogo,
  CardEmailIcon,
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
              <Image
                source={{
                  uri: data.profilePhoto
                    ? `data:${data.profilePhoto.mime};base64,${data.profilePhoto.data}`
                    : null,
                }}
                style={Styles.imageProfile(!!data.profilePhoto)}
              />
            </View>
            <View style={Styles.fullInfoView}>
              <View style={[Styles.infoView(!!data.name), {left: -2}]}>
                <NameIcon />
                <Text style={Styles.nameText}>{data.name}</Text>
              </View>

              {data.phoneData && (
                <View style={Styles.infoView(!!data.phoneData.phoneNumber)}>
                  <PhoneIcon />
                  <Text style={Styles.infoText}>
                    {'+' +
                      data.phoneData.callingCode +
                      ' ' +
                      data.phoneData.phoneNumber}
                  </Text>
                </View>
              )}

              <View style={Styles.infoView(!!data.email)}>
                <CardEmailIcon />
                <Text style={[Styles.infoText, {fontSize: 13}]}>
                  {data.email}
                </Text>
              </View>
            </View>
          </View>
          <View style={Styles.rightView}>
            <View style={Styles.companyView}>
              <View style={{height: '100%', width: '100%'}}>
                <Text style={Styles.companyNameText(!!data.companyName)}>
                  {data.companyName}
                </Text>
                <Text style={Styles.roleText(!!data.role)}>{data.role}</Text>
              </View>
              <Image
                source={{
                  uri: data.companyLogo
                    ? `data:${data.companyLogo.mime};base64,${data.companyLogo.data}`
                    : null,
                }}
                style={Styles.imageLogo(!!data.companyLogo)}
              />
            </View>

            <View style={Styles.logoView}>
              <FBLogo style={{display: data.facebookLink ? 'flex' : 'none'}} />
              <IGLogo
                style={{
                  marginTop: 5,
                  display: data.instagramLink ? 'flex' : 'none',
                }}
              />
              <LILogo
                style={{
                  marginTop: 5,
                  display: data.linkedInLink ? 'flex' : 'none',
                }}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Card;
