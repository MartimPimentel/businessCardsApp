import React, {useEffect, useState} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Spinner from '../../../shared/Spinner/Spinner';
const PersonalArea = () => {
  const isFocused = useIsFocused();
  const [personalCard, setPersonalCard] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@PERSONAL_DATA');
      setPersonalCard(jsonValue ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    if (isFocused) getData();
  }, [isFocused]);
  return isFocused ? (
    personalCard ? (
      <CardCreatedArea data={personalCard} />
    ) : (
      <NoCardArea />
    )
  ) : (
    <Spinner />
  );
};
export default PersonalArea;
