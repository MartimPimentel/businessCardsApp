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
import {useSelector} from 'react-redux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardForm = () => {
  const {currentCard} = useSelector((state) => state.cards);
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
    currentCard && (
      <View
        style={{
          height: windowHeight <= 600 ? '30%' : '45%',
        }}>
        <ScrollView
          style={{
            paddingHorizontal: 30,
            height: 1000,
          }}>
          <View style={Styles.fieldContainer(!!currentCard.name)}>
            <Text style={Styles.categoryText}>NAME</Text>
            <View style={Styles.headerContainer}>
              <Text style={Styles.informationText}>{currentCard.name}</Text>
            </View>
          </View>
          <View style={Styles.fieldContainer(!!currentCard.companyName)}>
            <Text style={Styles.categoryText}>COMPANY NAME</Text>
            <View style={Styles.headerContainer}>
              <Text style={Styles.informationText}>
                {currentCard.companyName}
              </Text>
            </View>
          </View>
          <View style={Styles.fieldContainer(!!currentCard.role)}>
            <Text style={Styles.categoryText}>COMPANY POSITION</Text>
            <View style={Styles.headerContainer}>
              <Text style={Styles.informationText}>{currentCard.role}</Text>
            </View>
          </View>
          <View style={Styles.fieldContainer(!!currentCard.phoneData)}>
            <Text style={Styles.categoryText}>PHONE NUMBER(PRINCIPAL)</Text>
            <View style={Styles.headerContainer}>
              <View style={{width: '50%'}}>
                <TouchableOpacity>
                  <Text
                    onPress={() =>
                      openPhoneNumber(
                        currentCard.phoneData.callingCode,
                        currentCard.phoneData.phoneNumber,
                      )
                    }
                    style={Styles.informationText}>
                    {!!currentCard.phoneData &&
                      '+' +
                        currentCard.phoneData.callingCode +
                        ' ' +
                        currentCard.phoneData.phoneNumber}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={Styles.fieldContainer(!!currentCard.alternativePhoneData)}>
            <Text style={Styles.categoryText}>PHONE NUMBER(ALTERNATIVE)</Text>
            <View style={Styles.headerContainer}>
              <View style={{width: '50%'}}>
                <TouchableOpacity>
                  <Text
                    onPress={() =>
                      openPhoneNumber(
                        currentCard.alternativePhoneData.callingCode,
                        currentCard.alternativePhoneData.phoneNumber,
                      )
                    }
                    style={Styles.informationText}>
                    {!!currentCard.alternativePhoneData &&
                      '+' +
                        currentCard.alternativePhoneData.callingCode +
                        ' ' +
                        currentCard.alternativePhoneData.phoneNumber}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={Styles.fieldContainer(!!currentCard.email)}>
            <Text style={Styles.categoryText}>EMAIL</Text>
            <View style={Styles.headerContainer}>
              <TouchableOpacity>
                <Text
                  onPress={() => {
                    openLink('mailto:' + currentCard.email);
                  }}
                  style={Styles.informationText}>
                  {currentCard.email}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.fieldContainer(!!currentCard.address)}>
            <Text style={Styles.categoryText}>ADDRESS</Text>
            <View style={Styles.headerContainer}>
              <Text style={Styles.informationText}>{currentCard.address}</Text>
            </View>
          </View>
          <View style={Styles.fieldContainer(!!currentCard.observations)}>
            <Text style={Styles.categoryText}>OBSERVATIONS</Text>
            <View style={Styles.headerContainer}>
              <Text style={Styles.informationText}>
                {currentCard.observations}
              </Text>
            </View>
          </View>
          {(!!currentCard.facebookLink ||
            !!currentCard.instagramLink ||
            !!currentCard.linkedInLink) && (
            <View>
              <Text style={Styles.categoryText}>SOCIAL NETWORKS</Text>
              <View style={Styles.linksContainer}>
                <View style={{height: '10%'}}></View>
                {!!currentCard.facebookLink && (
                  <TouchableOpacity
                    style={Styles.iconsTouchableContainer}
                    onPress={() => {
                      Linking.openURL(currentCard.facebookLink);
                    }}>
                    <View style={Styles.iconsContainer}>
                      <FBGoToProfile
                        viewBox={windowWidth <= 350 ? '10 -5 250 55' : ''}
                      />
                    </View>
                  </TouchableOpacity>
                )}

                {!!currentCard.instagramLink && (
                  <>
                    <View style={{height: '8%'}}></View>
                    <TouchableOpacity
                      style={Styles.iconsTouchableContainer}
                      onPress={() => {
                        Linking.openURL(currentCard.instagramLink);
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
                {!!currentCard.linkedInLink && (
                  <TouchableOpacity
                    style={Styles.iconsTouchableContainer}
                    onPress={() => {
                      Linking.openURL(currentCard.linkedInLink);
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
    )
  );
};

export default CardForm;
