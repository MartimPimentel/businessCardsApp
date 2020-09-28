import React from 'react';
import {View, Text} from 'react-native';
import Styles from './NoCardAreaStyles';
import Header from './components/Header/NoCardsHeader';
import {NoCardIcon, AddCardIcon} from '../../../../assets/icons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const NoCardArea = ({data}) => {
  const navigation = useNavigation();

  return (
    <>
      <Header data={data} />
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}>
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
            navigation.navigate('EditCardArea', data);
          }}>
          <AddCardIcon />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
export default NoCardArea;
