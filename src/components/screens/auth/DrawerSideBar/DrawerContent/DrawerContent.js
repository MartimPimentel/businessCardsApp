import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  MyCardsIcon,
  PersonalAreaIcon,
  UnknownUser,
  LogOutIcon,
  Gear,
} from '../../../../../assets/icons';
import Styles from './DrawerContentStyles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {CommonActions} from '@react-navigation/native';
import {
  deleteToken,
  getFromStore,
} from '../../../../../shared/functions/functions';

const DrawerContent = (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  const [selectedTag, setSelectedTag] = useState(1);
  const [username, setUsername] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await getFromStore('personalCard');
      const {name, profilePhoto} =
        jsonValue != null ? JSON.parse(jsonValue)[0] : '';
      setUsername(name);
      setProfilePhoto(profilePhoto);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    if (isDrawerOpen) getData();
  }, [isDrawerOpen]);

  return (
    <View style={Styles.globalContainer}>
      <View style={Styles.backgroundContainer}>
        <LinearGradient
          style={Styles.linearGradientStyles}
          colors={['#A9E2FD', '#8AB1F2']}>
          <View style={Styles.topBackground} />
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
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.seletecTag(selectedTag == 1)} />
          <TouchableOpacity
            style={Styles.myCardsStyle}
            onPress={() => {
              setSelectedTag(1);
              props.navigation.navigate('MyCards');
            }}>
            <MyCardsIcon height={30} width={30} />
            <Text style={Styles.textStyle}>My Cards</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.separatorStyle} />
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.seletecTag(selectedTag == 2)} />
          <TouchableOpacity
            style={Styles.personalAreaStyle}
            onPress={() => {
              setSelectedTag(2);
              props.navigation.navigate('PersonalArea');
            }}>
            <PersonalAreaIcon height={30} width={30} />
            <Text style={Styles.textStyle}>Personal Area</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.separatorStyle} />
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.seletecTag(selectedTag == 3)} />
          <TouchableOpacity
            style={Styles.personalAreaStyle}
            onPress={() => {
              setSelectedTag(3);
              props.navigation.navigate('Settings');
            }}>
            <Gear height={30} width={30} />
            <Text style={Styles.textStyle}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.separatorStyle} />
      </View>
      <View style={Styles.logOutContainer}>
        <TouchableOpacity
          style={Styles.logOutButton}
          onPress={() => {
            deleteToken()
              .then(() => {
                props.navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{name: 'NotAuth'}],
                  }),
                );
              })
              .catch((error) => {
                console.log(error);
              });
          }}>
          <LogOutIcon height={30} width={30} />
          <Text style={Styles.textStyle}>Log out</Text>
        </TouchableOpacity>
        <View style={Styles.logOutSeparator} />
      </View>
    </View>
  );
};
export default DrawerContent;
