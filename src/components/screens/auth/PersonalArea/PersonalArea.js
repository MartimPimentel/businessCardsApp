import React, {useEffect, useState} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Spinner from '../../../shared/Spinner/Spinner';
import SInfo from 'react-native-sensitive-info';

const PersonalArea = () => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [personalCard, setPersonalCard] = useState(null);
  const getData = async () => {
    /* getCard()
      .then((res) => {
        const jsonValue = JSON.stringify(res.);
        await SInfo.setItem('personalCard', jsonValue, {
          sharedPreferencesName: 'bussinessCards',
          keychainService: 'bussinessCards',
        });
        console.log('RES:', res.status);
      })
      .catch((error) => {
        console.log(error.request.response);
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        setError(errors);
      });
    
    setPersonalCard(jsonValue ? JSON.parse(jsonValue) : null); */
  };

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      getData();
    }
  }, [isFocused]);
  return loading ? (
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
