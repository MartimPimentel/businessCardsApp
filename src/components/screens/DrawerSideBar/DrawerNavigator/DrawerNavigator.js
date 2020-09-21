import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MyCardsArea from "../../../features/MyCardsArea/MyCardsArea";
import DrawerContent from "../DrawerContent/DrawerContent";
import PersonalArea from "../../PersonalArea/PersonalArea";
import EditCardArea from "../../../features/PersonalArea/EditCardArea/EditCardArea";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="MyCards" component={MyCardsArea} />
        <Drawer.Screen name="PersonalArea" component={PersonalArea} />
        <Drawer.Screen name="EditCardArea" component={EditCardArea} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigator;
