import React, {useEffect} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import {createStackNavigator} from '@react-navigation/stack';
import EditCardArea from '../../../features/PersonalArea/EditCardArea/EditCardArea';
import {usePersonalCard} from '../../../../shared/api/usePersonalCard';

const Stack = createStackNavigator();
const PersonalArea = () => {
  const {card, getPersonalCard} = usePersonalCard();
  useEffect(() => {
    getPersonalCard();
  }, []);
  return card ? (
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
  ) : (
    <></>
  );
};
export default PersonalArea;
