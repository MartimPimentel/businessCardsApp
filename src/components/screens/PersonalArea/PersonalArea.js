import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import CardCreatedArea from '../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import EditCardArea from '../../features/PersonalArea/EditCardArea/EditCardArea';
import NoCardArea from '../../features/PersonalArea/NoCardArea/NoCardArea';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
const emptyObject = {
  name: '',
  address: '',
  companyLogo: '',
  companyName: '',
  email: '',
  facebookLink: '',
  instagramLink: '',
  linkedInLink: '',
  observations: '',
  phoneNumber: '',
  profilePhoto: '',
};
const PersonalArea = () => {
  const isFocused = useIsFocused();
  const [objData, setObjData] = useState({
    name: '',
    address: '',
    companyLogo: '',
    companyName: '',
    email: '',
    facebookLink: '',
    instagramLink: '',
    linkedInLink: '',
    observations: '',
    phoneNumber: '',
    profilePhoto: '',
  });
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@PERSONAL_DATA');

      setObjData(jsonValue != null ? JSON.parse(jsonValue) : emptyObject);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    if (isFocused) getData();
  }, [isFocused]);
  return isFocused ? (
    objData.name != '' ? (
      <CardCreatedArea data={objData} />
    ) : (
      <NoCardArea data={objData} />
    )
  ) : (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <ActivityIndicator size={100} color="#8AB1F2" />
    </View>
  );
};
export default PersonalArea;
