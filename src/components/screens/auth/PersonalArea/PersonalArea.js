import React, {useEffect, useState} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Spinner from '../../../shared/Spinner/Spinner';
import SInfo from 'react-native-sensitive-info';

const PersonalArea = () => {
  const isFocused = useIsFocused();
  const [personalCard, setPersonalCard] = useState(null);
  const getData = async () => {
    const jsonValue = await SInfo.getItem('personalCard', {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
    setPersonalCard(jsonValue ? JSON.parse(jsonValue) : null);
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
