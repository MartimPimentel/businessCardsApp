import React from 'react';
import {View, Text} from 'react-native';
import CardCreatedArea from '../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import EditCardArea from '../../features/PersonalArea/EditCardArea/EditCardArea';
import NoCardArea from '../../features/PersonalArea/NoCardArea/NoCardArea';

const PersonalArea = () => {
  const personalCardExists = () => {
    return true;
  };
  if (personalCardExists()) {
    return <CardCreatedArea />;
  } else {
    return <NoCardArea />;
  }
};
export default PersonalArea;
