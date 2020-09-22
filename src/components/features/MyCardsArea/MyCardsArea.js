import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Swipper from './components/Swipper/Swipper';
import Styles from './MyCardAreaStyles';
import HeaderSearch from '../../shared/Header/HeaderSearch';

import {
  FBGoToProfile,
  IGGoToProfile,
  LIGoToProfile,
} from '../../../assets/icons';

const MyCardsArea = () => {
  return (
    <>
      <HeaderSearch />
      <View style={Styles.outsideContainer}>
        <Text style={Styles.titleStyles}>My Cards</Text>
        <Swipper />
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: 40, paddingTop: 10}}>
          <View style={{marginBottom: 15}}>
            <Text style={Styles.categoryText}>NAME</Text>
            <View
              style={{
                borderColor: 'gainsboro',
                borderBottomWidth: 2.5,
              }}>
              <Text style={Styles.informationText}>Jane Doe</Text>
            </View>
          </View>
          <View style={{marginBottom: 15}}>
            <Text style={Styles.categoryText}>PHONE NUMBER</Text>
            <View
              style={{
                borderColor: 'gainsboro',
                borderBottomWidth: 2.5,
              }}>
              <Text style={Styles.informationText}>+1 123 456 78</Text>
            </View>
          </View>
          <View style={{marginBottom: 15}}>
            <Text style={Styles.categoryText}>ADDRESS</Text>
            <View
              style={{
                borderColor: 'gainsboro',
                borderBottomWidth: 2.5,
              }}>
              <Text style={Styles.informationText}>
                Abc st, po 12345, NY, USA
              </Text>
            </View>
          </View>
          <View style={{marginBottom: 15}}>
            <Text style={Styles.categoryText}>COMPANY NAME</Text>
            <View
              style={{
                borderColor: 'gainsboro',
                borderBottomWidth: 2.5,
              }}>
              <Text style={Styles.informationText}>Mark Industries</Text>
            </View>
          </View>

          <FBGoToProfile />
          <IGGoToProfile />
          <LIGoToProfile />
        </View>
      </ScrollView>
    </>
  );
};
export default MyCardsArea;
