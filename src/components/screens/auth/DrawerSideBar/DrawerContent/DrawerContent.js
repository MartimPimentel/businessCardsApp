import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  MyCardsIcon,
  PersonalAreaIcon,
  UnknownUser,
  LogOutIcon,
} from '../../../../../assets/icons';
import Styles from './DrawerContentStyles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsDrawerOpen} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  const [isMyCardsSelected, setIsMyCardSelected] = useState(true);
  const [username, setUsername] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@PERSONAL_DATA');
      const {name, profilePhoto} =
        jsonValue != null ? JSON.parse(jsonValue) : '';
      setUsername(name);
      setProfilePhoto(profilePhoto);
    } catch (e) {
      // error reading value
    }
  };
  const clearKey = async () => {
    try {
      await AsyncStorage.removeItem('@AUTH_KEY');
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };

  useEffect(() => {
    if (isDrawerOpen) getData();
  }, [isDrawerOpen]);

  return (
    <View
      style={{
        left: -25,
        width: '110%',
        borderTopRightRadius: 29,
        borderBottomRightRadius: 29,
      }}>
      <View style={Styles.backgroundContainer}>
        <LinearGradient
          style={{
            width: '100%',
            height: '100%',
            borderBottomRightRadius: 39,

            borderTopRightRadius: 39,
          }}
          colors={['#A9E2FD', '#8AB1F2']}>
          <View
            style={{
              backgroundColor: 'white',
              opacity: 0.25,
              height: '20%',
              width: '100%',
              borderTopRightRadius: 39,
            }}></View>
        </LinearGradient>
      </View>
      <View style={Styles.userProfileContainer}>
        <View style={Styles.userImageContainer}>
          <Image
            source={
              profilePhoto
                ? {
                    uri: `data:${profilePhoto.mime};base64,${profilePhoto.data}`,
                  }
                : UnknownUser
            }
            style={Styles.userImageStyles}
          />
        </View>
        <Text style={Styles.userNameStyles}>{username}</Text>
      </View>
      <View style={Styles.menusContainer}>
        <TouchableOpacity
          style={Styles.myCardsStyle(isMyCardsSelected)}
          onPress={() => {
            setIsMyCardSelected(true);
            props.navigation.navigate('MyCards');
          }}>
          <View style={Styles.seletecTag(isMyCardsSelected)}></View>
          <MyCardsIcon height={30} width={30} />
          <Text style={Styles.textStyle}>My Cards</Text>
        </TouchableOpacity>
        <View style={Styles.separatorStyle}></View>
        <TouchableOpacity
          style={Styles.personalAreaStyle(!isMyCardsSelected)}
          onPress={() => {
            setIsMyCardSelected(false);
            props.navigation.navigate('PersonalArea');
          }}>
          <View style={Styles.seletecTag(!isMyCardsSelected)}></View>
          <PersonalAreaIcon height={30} width={30} />
          <Text style={Styles.textStyle}>Personal Area</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.logOutContainer}>
        <TouchableOpacity
          style={Styles.logOutButton}
          onPress={() => {
            clearKey();
            props.navigation.navigate('NotAuth');
          }}>
          <LogOutIcon height={30} width={30} />
          <Text style={Styles.textStyle}>Log out</Text>
        </TouchableOpacity>
        <View style={Styles.logOutSeparator}></View>
      </View>
    </View>
  );
};
export default DrawerContent;
