import React, {useEffect, useState} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Spinner from '../../../shared/Spinner/Spinner';
import SInfo from 'react-native-sensitive-info';
import {parseData} from '../../../../shared/functions/functions';
import {getCard} from '../../../../shared/api/getCard';
import {set} from 'react-native-reanimated';

const PersonalArea = () => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [dbError, setError] = useState(null);
  const [personalCard, setPersonalCard] = useState(null);

  const storeData = async (value) => {
    await SInfo.setItem('personalCard', JSON.stringify(value), {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
  };

  const getData = async () => {
    const card = await SInfo.getItem('personalCard', {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });

    if (card) setPersonalCard(JSON.parse(card));
    else setPersonalCard(null);
  };
  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);
  return personalCard ? (
    <CardCreatedArea data={personalCard} />
  ) : (
    <NoCardArea />
  );
};
export default PersonalArea;
