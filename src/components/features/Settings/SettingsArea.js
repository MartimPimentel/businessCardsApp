import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import HeaderSettings from './components/Header/HeaderSettings';
import Styles from './SettingsAreaStyle';
import SInfo from 'react-native-sensitive-info';
import SettingsForm from './components/SettingsForm/SettingsForm';

const SettingsArea = () => {
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
        <View style={Styles.outsideContainer}>
          <Text style={Styles.titleStyles}>Settings</Text>
        </View>
        <View style={Styles.outsideContainer}>
          <Text style={Styles.titleEntries}>Email</Text>
          <Text style={Styles.titleEntries}>Password</Text>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default SettingsArea;
