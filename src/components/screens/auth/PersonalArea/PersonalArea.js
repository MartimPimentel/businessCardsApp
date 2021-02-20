import React, {useEffect, useState} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Spinner from '../../../shared/Spinner/Spinner';
import SInfo from 'react-native-sensitive-info';
import {parseData} from '../../../../shared/functions/functions';
import {getCard} from '../../../../shared/api/getCard';

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
    getCard()
      .then((res) => {
        console.log(res.data);
        let value = parseData([res.data])[0];
        storeData(value);
        if (value.length != 0 || value.length == undefined) {
          setPersonalCard(value);
        } else {
          setPersonalCard(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log('Failed');
        //const errors = JSON.parse(error.request.response);
        console.log(error);
        //setError(errors);
      });
  };
  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      getData();
    }
  }, [isFocused]);
  return !loading ? (
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
