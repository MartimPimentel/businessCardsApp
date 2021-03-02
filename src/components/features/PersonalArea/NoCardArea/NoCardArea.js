import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './NoCardAreaStyles';
import Header from './components/Header/NoCardsHeader';
import {NoCardIcon, AddCardIcon} from '../../../../assets/icons';
import {ScrollView} from 'react-native-gesture-handler';

const NoCardArea = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        style={{height: '87%'}}>
        <View style={Styles.textBox}>
          <Text style={Styles.text}>Personal Area</Text>
        </View>
        <View style={Styles.icon}>
          <NoCardIcon />
        </View>
        <View style={Styles.textBox}>
          <Text style={Styles.text}>Don't have your </Text>
          <Text style={Styles.text}>business card yet ?</Text>
        </View>
        <TouchableOpacity
          style={Styles.icon}
          onPress={() => {
            navigation.push('EditCardArea', {cardData: undefined});
          }}>
          <AddCardIcon />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
export default NoCardArea;
