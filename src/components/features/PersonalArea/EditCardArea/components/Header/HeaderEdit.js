import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Styles from './HeaderEditStyles';
import {
  LeftArrowIcon,
  SaveIcon,
  CardsIcon,
} from '../../../../../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const HeaderEdit = ({onClickToSaveData}) => {
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
              onPress={() => navigation.navigate('PersonalArea')}>
              <LeftArrowIcon height="50%" width="50%" />
            </TouchableOpacity>
            <CardsIcon />
            <TouchableOpacity
              style={Styles.rightIcon}
              onPress={onClickToSaveData}>
              <SaveIcon height="80%" width="80%" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default HeaderEdit;
