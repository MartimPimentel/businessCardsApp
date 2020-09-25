import React from 'react';
import {SafeAreaView, ImageBackground, View} from 'react-native';
import Styles from './HeaderStyles';
import {EditIcon, MenuIcon, CardsIcon} from '../../../assets/icons';
import {HeaderBackground} from '../../../assets/backgrounds';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
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
              <MenuIcon />
            </TouchableOpacity>
            <CardsIcon />
            <View style={Styles.rightIcon}>
              <EditIcon />
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default Header;
