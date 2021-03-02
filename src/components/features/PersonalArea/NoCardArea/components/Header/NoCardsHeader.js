import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Styles from './NoCardsHeaderStyles';
import {MenuIcon, CardsIcon, AddIcon} from '../../../../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const NoCardsHeader = ({navigation}) => {
  return (
    <View style={Styles.header}>
      <SafeAreaView style={Styles.safeAreaView}>
        <LinearGradient
          style={Styles.background}
          colors={['#A9E2FD', '#8AB1F2']}>
          <View style={Styles.icons}>
            <TouchableOpacity
              style={Styles.leftIcon}
              onPress={() => navigation.openDrawer()}>
              <MenuIcon />
            </TouchableOpacity>
            <CardsIcon />
            <TouchableOpacity
              style={Styles.rightIcon}
              onPress={() =>
                navigation.push('EditCardArea', {cardData: undefined})
              }>
              <AddIcon height="50%" width="50%" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default NoCardsHeader;
