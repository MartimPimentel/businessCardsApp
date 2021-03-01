import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Styles from './HeaderSettingsStyles';
import {MenuIcon, SaveIcon, CardsIcon} from '../../../../../assets/icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const HeaderSettings = ({onClickToSaveData}) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.header}>
      <SafeAreaView style={Styles.safeAreaView}>
        <LinearGradient
          style={Styles.background}
          colors={['#A9E2FD', '#8AB1F2']}>
          <View style={Styles.icons}>
            <TouchableOpacity
              style={Styles.leftIcon}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MenuIcon height="50%" width="50%" />
            </TouchableOpacity>
            <CardsIcon />
            <View style={Styles.rightIcon}></View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default HeaderSettings;
