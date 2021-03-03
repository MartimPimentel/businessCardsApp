import React, {useEffect, useState} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import {useIsFocused} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EditCardArea from '../../../features/PersonalArea/EditCardArea/EditCardArea';
import {usePersonalCard} from '../../../../shared/api/usePersonalCard';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const PersonalArea = () => {
  const isFocused = useIsFocused();
  const {card, error: apiError, getPersonalCard} = usePersonalCard({
    error: true,
  });
  const {error: asyncError} = useSelector((state) => state.async);
  useEffect(() => {
    if (isFocused && !asyncError && apiError) {
      getPersonalCard();
    }
  }, [isFocused, card]);
  return (
    !apiError && (
      <Stack.Navigator
        headerMode="none"
        initialRouteName={card?.length == 1 ? 'CardCreatedArea' : 'NoCardArea'}>
        <Stack.Screen
          name="CardCreatedArea"
          component={CardCreatedArea}
          initialParams={{cardData: card?.length == 1 ? card[0] : undefined}}
        />

        <Stack.Screen name="NoCardArea" component={NoCardArea} />

        <Stack.Screen name="EditCardArea" component={EditCardArea} />
      </Stack.Navigator>
    )
  );
};
export default PersonalArea;
