import React from 'react';
import {ScrollView, View, Text, Dimensions, Linking} from 'react-native';
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
  const {
    companyPosition,
    phoneData,
    phoneData2,
    address,
    companyName,
    name,
    email,
    observations,
    facebookLink,
    linkedInLink,
    instagramLink,
  } = !!data ? data : '';
  console.log(facebookLink, instagramLink, linkedInLink);
  return !!data ? (
    <View
      style={{
        height: windowHeight <= 600 ? '30%' : '35%',
      }}>
      <ScrollView
        style={{
          paddingHorizontal: 30,
          height: 1000,
        }}>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>NAME</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{name}</Text>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>COMPANY NAME</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{companyName}</Text>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>COMPANY POSITION</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{companyPosition}</Text>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>PHONE NUMBER(PRINCIPAL)</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>
              {'+' + phoneData.callingCode + ' ' + phoneData.phoneNumber}
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>PHONE NUMBER(ALTERNATIVE)</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>
              {'+' + phoneData2.callingCode + ' ' + phoneData2.phoneNumber}
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>EMAIL</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{email}</Text>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>ADDRESS</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{address}</Text>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.categoryText}>OBSERVATIONS</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{observations}</Text>
          </View>
        </View>
        {facebookLink || instagramLink || linkedInLink ? (
          <View>
            <Text style={Styles.categoryText}>SOCIAL NETWORKS</Text>
            <View
              style={{
                height: 280,
                alignItems: 'center',
              }}>
              <View style={{height: '10%'}}></View>
              {facebookLink ? (
                <TouchableOpacity
                  style={Styles.iconsTouchableContainer}
                  onPress={() => {
                    Linking.openURL(facebookLink);
                  }}>
                  <View style={Styles.iconsContainer}>
                    <FBGoToProfile
                      viewBox={windowWidth <= 350 ? '10 -5 250 55' : ''}
                    />
                  </View>
                </TouchableOpacity>
              ) : (
                <></>
              )}

              {instagramLink ? (
                <>
                  <View style={{height: '8%'}}></View>
                  <TouchableOpacity
                    style={Styles.iconsTouchableContainer}
                    onPress={() => {
                      Linking.openURL(instagramLink);
                    }}>
                    <View style={Styles.iconsContainer}>
                      <IGGoToProfile
                        viewBox={windowWidth <= 350 ? '10 -5 250 55' : ''}
                      />
                    </View>
                  </TouchableOpacity>
                </>
              ) : (
                <></>
              )}
              <View style={{height: '8%'}}></View>
              {linkedInLink ? (
                <TouchableOpacity
                  style={Styles.iconsTouchableContainer}
                  onPress={() => {
                    Linking.openURL(linkedInLink);
                  }}>
                  <View style={Styles.iconsContainer}>
                    <LIGoToProfile
                      viewBox={windowWidth <= 350 ? '10 -5 250 55' : ''}
                    />
                  </View>
                </TouchableOpacity>
              ) : (
                <></>
              )}
              <View style={{height: '8%'}}></View>
            </View>
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  ) : (
    <></>
  );
};

export default CardForm;
