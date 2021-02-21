import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Linking,
  Platform,
} from 'react-native';
import Styles from './CardFormStyles';
import {
  FBGoToProfile,
  IGGoToProfile,
  LIGoToProfile,
} from '../../../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardForm = ({data}) => {
  const openLink = (link) => {
    Linking.canOpenURL(link)
      .then((supported) => {
        if (!supported) {
          console.log('Link is not available');
        } else {
          return Linking.openURL(link);
        }
      })
      .catch((err) => console.log(err));
  };
  const openPhoneNumber = (callingCode, phoneNumber) => {
    let requestNumber = '';
    if (Platform.OS !== 'android') {
      requestNumber = 'telprompt:+';
    } else {
      requestNumber = 'tel:+';
    }
    requestNumber = requestNumber + callingCode + ' ' + phoneNumber;
    openLink(requestNumber);
  };
  return (
    <View
      style={{
        height: windowHeight <= 600 ? '30%' : '45%',
      }}>
      <ScrollView
        style={{
          paddingHorizontal: 30,
          height: 1000,
        }}>
        <View style={Styles.fieldContainer(!!data.name)}>
          <Text style={Styles.categoryText}>NAME</Text>
          <View style={Styles.headerContainer}>
            <Text style={Styles.informationText}>{data.name}</Text>
          </View>
        </View>
        <View style={Styles.fieldContainer(!!data.companyName)}>
          <Text style={Styles.categoryText}>COMPANY NAME</Text>
          <View style={Styles.headerContainer}>
            <Text style={Styles.informationText}>{data.companyName}</Text>
          </View>
        </View>
        <View style={Styles.fieldContainer(!!data.role)}>
          <Text style={Styles.categoryText}>COMPANY POSITION</Text>
          <View style={Styles.headerContainer}>
            <Text style={Styles.informationText}>{data.role}</Text>
          </View>
        </View>
        <View style={Styles.fieldContainer(!!data.phoneData)}>
          <Text style={Styles.categoryText}>PHONE NUMBER(PRINCIPAL)</Text>
          <View style={Styles.headerContainer}>
            <View style={{width: '50%'}}>
              <TouchableOpacity>
                <Text
                  onPress={() =>
                    openPhoneNumber(
                      data.phoneData.callingCode,
                      data.phoneData.phoneNumber,
                    )
                  }
                  style={Styles.informationText}>
                  {!!data.phoneData &&
                    '+' +
                      data.phoneData.callingCode +
                      ' ' +
                      data.phoneData.phoneNumber}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.fieldContainer(!!data.alternativePhoneData)}>
          <Text style={Styles.categoryText}>PHONE NUMBER(ALTERNATIVE)</Text>
          <View style={Styles.headerContainer}>
            <View style={{width: '50%'}}>
              <TouchableOpacity>
                <Text
                  onPress={() =>
                    openPhoneNumber(
                      data.alternativePhoneData.callingCode,
                      data.alternativePhoneData.phoneNumber,
                    )
                  }
                  style={Styles.informationText}>
                  {!!data.alternativePhoneData &&
                    '+' +
                      data.alternativePhoneData.callingCode +
                      ' ' +
                      data.alternativePhoneData.phoneNumber}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.fieldContainer(!!data.email)}>
          <Text style={Styles.categoryText}>EMAIL</Text>
          <View style={Styles.headerContainer}>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  openLink('mailto:' + data.email);
                }}
                style={Styles.informationText}>
                {data.email}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.fieldContainer(!!data.address)}>
          <Text style={Styles.categoryText}>ADDRESS</Text>
          <View style={Styles.headerContainer}>
            <Text style={Styles.informationText}>{data.address}</Text>
          </View>
        </View>
        <View style={Styles.fieldContainer(!!data.observations)}>
          <Text style={Styles.categoryText}>OBSERVATIONS</Text>
          <View style={Styles.headerContainer}>
            <Text style={Styles.informationText}>{data.observations}</Text>
          </View>
        </View>
        {(!!data.facebookLink ||
          !!data.instagramLink ||
          !!data.linkedInLink) && (
          <View>
            <Text style={Styles.categoryText}>SOCIAL NETWORKS</Text>
            <View style={Styles.linksContainer}>
              <View style={{height: '10%'}}></View>
              {!!data.facebookLink && (
                <TouchableOpacity
                  style={Styles.iconsTouchableContainer}
                  onPress={() => {
                    Linking.openURL(data.facebookLink);
                  }}>
                  <View style={Styles.iconsContainer}>
                    <FBGoToProfile
                      viewBox={windowWidth <= 350 ? '10 -5 250 55' : ''}
                    />
                  </View>
                </TouchableOpacity>
              )}

              {!!data.instagramLink && (
                <>
                  <View style={{height: '8%'}}></View>
                  <TouchableOpacity
                    style={Styles.iconsTouchableContainer}
                    onPress={() => {
                      Linking.openURL(data.instagramLink);
                    }}>
                    <View style={Styles.iconsContainer}>
                      <IGGoToProfile
                        viewBox={windowWidth <= 350 ? '10 -5 250 55' : ''}
                      />
                    </View>
                  </TouchableOpacity>
                </>
              )}
              <View style={{height: '8%'}}></View>
              {!!data.linkedInLink && (
                <TouchableOpacity
                  style={Styles.iconsTouchableContainer}
                  onPress={() => {
                    Linking.openURL(data.linkedInLink);
                  }}>
                  <View style={Styles.iconsContainer}>
                    <LIGoToProfile
                      viewBox={windowWidth <= 350 ? '10 -5 250 55' : ''}
                    />
                  </View>
                </TouchableOpacity>
              )}
              <View style={{height: '8%'}}></View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CardForm;
