import React from 'react';
import {ScrollView, View, Text, Dimensions} from 'react-native';
import Styles from './CardFormStyles';

import {
  FBGoToProfile,
  IGGoToProfile,
  LIGoToProfile,
} from '../../../../../assets/icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardForm = ({data}) => {
  const {phone, address, companyName, name} = data;

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
          <Text style={Styles.categoryText}>PHONE NUMBER</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{phone}</Text>
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
          <Text style={Styles.categoryText}>COMPANY NAME</Text>
          <View
            style={{
              borderColor: 'gainsboro',
              borderBottomWidth: 2.5,
            }}>
            <Text style={Styles.informationText}>{companyName}</Text>
          </View>
        </View>
        <View>
          <Text style={Styles.categoryText}>SOCIAL NETWORKS</Text>
          <View style={{marginTop: 10}}>
            <FBGoToProfile viewBox={windowWidth <= 350 ? '40 -7 250 95' : ''} />
            <IGGoToProfile
              style={{top: windowWidth <= 350 ? -25 : -10}}
              viewBox={windowWidth <= 350 ? '40 -7 250 95' : ''}
            />
            <LIGoToProfile
              style={{top: windowWidth <= 350 ? -40 : -20}}
              viewBox={windowWidth <= 350 ? '40 0 250 95' : ''}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardForm;
