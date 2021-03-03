import React, {useEffect, useState} from 'react';
import CardCreatedArea from '../../../features/PersonalArea/CardCreatedArea/CardCreatedArea';
import NoCardArea from '../../../features/PersonalArea/NoCardArea/NoCardArea';
import {useIsFocused} from '@react-navigation/native';
import SInfo from 'react-native-sensitive-info';
import {createStackNavigator} from '@react-navigation/stack';
import EditCardArea from '../../../features/PersonalArea/EditCardArea/EditCardArea';

const Stack = createStackNavigator();
const PersonalArea = () => {
  const isFocused = useIsFocused();
  const [personalCard, setPersonalCard] = useState(null);

  const getData = async () => {
    const card = await SInfo.getItem('personalCard', {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });

    if (card) setPersonalCard(JSON.parse(card));
    else setPersonalCard(undefined);
  };
  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={personalCard ? 'CardCreatedArea' : 'NoCardArea'}>
      <Stack.Screen
        name="CardCreatedArea"
        component={CardCreatedArea}
        initialParams={{cardData: personalCard}}
      />

      <Stack.Screen name="NoCardArea" component={NoCardArea} />

      <Stack.Screen name="EditCardArea" component={EditCardArea} />
    </Stack.Navigator>
  );
};
export default PersonalArea;
