import React from 'react';
import {ScrollView, View, Text, Dimensions} from 'react-native';
import Swipper from './components/Swipper/Swipper';
import Styles from './MyCardAreaStyles';
import HeaderSearch from '../../shared/Header/HeaderSearch';

import {
  FBGoToProfile,
  IGGoToProfile,
  LIGoToProfile,
} from '../../../assets/icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyCardsArea = () => {
  return (
    <>
      <HeaderSearch />
      <Text style={Styles.titleStyles}>My Cards</Text>
      <View style={Styles.outsideContainer}>
        <Swipper />

        <View>
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
            <View>
              <Text style={Styles.categoryText}>SOCIAL NETWORKS</Text>
              <View style={{marginTop: 10}}>
                <FBGoToProfile
                  viewBox={windowWidth <= 350 ? '40 -7 250 95' : ''}
                />
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
      </View>
    </>
  );
};
export default MyCardsArea;
