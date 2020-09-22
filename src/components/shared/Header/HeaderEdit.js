import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import Styles from './HeaderStyles';
import {LeftArrowIcon, SaveIcon, CardsIcon} from '../../../assets/icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderBackground} from '../../../assets/backgrounds';
import LinearGradient from 'react-native-linear-gradient';

const HeaderEdit = ({onClickToSaveData}) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.header}>
      <LinearGradient style={Styles.background} colors={['#A9E2FD', '#8AB1F2']}>
        <View style={Styles.icons}>
          <TouchableOpacity
            style={Styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <LeftArrowIcon />
          </TouchableOpacity>
          <CardsIcon />
          <TouchableOpacity
            style={Styles.rightIcon}
            onPress={onClickToSaveData}>
            <SaveIcon style={{marginBottom: 15}} />
            <Text
              style={{
                fontSize: 11,
                color: 'white',
                fontFamily: 'Nunito-SemiBold',
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 38,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HeaderEdit;
