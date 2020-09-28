import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import CardCreatedArea from '../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import EditCardArea from '../../features/PersonalArea/EditCardArea/EditCardArea';
import NoCardArea from '../../features/PersonalArea/NoCardArea/NoCardArea';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
const PersonalArea = () => {
  const isFocused = useIsFocused();
  const [objData, setObjData] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@PERSONAL_DATA');
      console.log('data-->', JSON.parse(jsonValue));
      setObjData(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };
  useEffect(() => {
    if (isFocused) getData();
  }, [isFocused]);

  if (objData != null) {
    return <CardCreatedArea data={objData} />;
  } else {
    return <NoCardArea data={objData} />;
  }
};
export default PersonalArea;
