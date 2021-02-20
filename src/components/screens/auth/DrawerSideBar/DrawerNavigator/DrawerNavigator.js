import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyCardsArea from '../../../../features/MyCardsArea/MyCardsArea';
import DrawerContent from '../DrawerContent/DrawerContent';
import PersonalArea from '../../PersonalArea/PersonalArea';
import EditCardArea from '../../../../features/PersonalArea/EditCardArea/EditCardArea';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [initRender, setInitRender] = useState(true);
  useEffect(() => {
    setInitRender(false);
  }, []);
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: 'transparent',
        width: initRender ? 0 : '70%',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="MyCards" component={MyCardsArea} />
      <Drawer.Screen name="PersonalArea" component={PersonalArea} />
      <Drawer.Screen name="EditCardArea" component={EditCardArea} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
