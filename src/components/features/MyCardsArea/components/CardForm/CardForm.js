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
    phoneData,
    address,
    companyName,
    name,
    email,
    observations,
    facebookLink,
    linkedInLink,
    instagramLink,
  } = data;

  return (
    <View
      style={{
        height: windowHeight <= 600 ? '45%' : '52%',
      }}>
      <ScrollView
        style={{
          paddingHorizontal: 30,
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
          <Text style={Styles.categoryText}>PHONE NUMBER</Text>
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
        <View>
          <Text style={Styles.categoryText}>SOCIAL NETWORKS</Text>
          <View style={{marginTop: 10}}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(facebookLink);
              }}>
              <FBGoToProfile
                viewBox={windowWidth <= 350 ? '40 -7 250 95' : ''}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(instagramLink);
              }}>
              <IGGoToProfile
                style={{top: windowWidth <= 350 ? -25 : -10, marginTop: 10}}
                viewBox={windowWidth <= 350 ? '40 -7 250 95' : ''}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(linkedInLink);
              }}>
              <LIGoToProfile
                style={{top: windowWidth <= 350 ? -40 : -20, marginTop: 10}}
                viewBox={windowWidth <= 350 ? '40 0 250 95' : ''}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardForm;
