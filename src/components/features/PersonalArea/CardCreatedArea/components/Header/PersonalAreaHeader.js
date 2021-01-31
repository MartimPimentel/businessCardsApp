import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Styles from './PersonalAreaHeaderStyles';
import {EditIcon, MenuIcon, CardsIcon} from '../../../../../../assets/icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const PersonalAreaHeader = ({data, disabled}) => {
  const navigation = useNavigation();

  return (
    <View style={Styles.header}>
      <SafeAreaView style={Styles.safeAreaView}>
        <LinearGradient
          style={Styles.background}
          colors={['#A9E2FD', '#8AB1F2']}>
          <View style={Styles.icons}>
            <TouchableOpacity
              disabled={disabled}
              style={Styles.leftIcon}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MenuIcon />
            </TouchableOpacity>
            <CardsIcon />
            <TouchableOpacity
              disabled={disabled}
              style={Styles.rightIcon}
              onPress={() => navigation.navigate('EditCardArea', data)}>
              <EditIcon />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default PersonalAreaHeader;
