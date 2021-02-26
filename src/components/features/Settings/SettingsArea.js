import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  CardsIcon,
  DeleteAccount,
  LeftArrowIcon,
  OptionsArrow,
} from '../../../assets/icons/index';
import HeaderSettings from './components/Header/HeaderSettings';
import Styles from './SettingsAreaStyle';
import SInfo from 'react-native-sensitive-info';
import SettingsForm from './components/SettingsForm/EmailForm';
import {useNavigation} from '@react-navigation/native';

const SettingsArea = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <HeaderSettings
        onClickToSaveData={() => {
          setPressedSave(pressedSave != undefined ? !pressedSave : true);
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        <Text style={Styles.titleStyles}>Settings</Text>
        <View style={Styles.outsideContainer}>
          <TouchableOpacity
            style={Styles.optionsContainer}
            onPress={() => {
              navigation.navigate('EmailForm');
            }}>
            <View style={Styles.optionsView}>
              <Text style={Styles.titleEntries}>Email</Text>
              <OptionsArrow style={{alignSelf: 'center'}} />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={Styles.optionsContainer}
            onPress={() => navigation.navigate('PasswordForm')}>
            <View style={Styles.optionsView}>
              <Text style={Styles.titleEntries}>Password</Text>
              <OptionsArrow style={{alignSelf: 'center'}} />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={Styles.delete}>
            <DeleteAccount />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default SettingsArea;
