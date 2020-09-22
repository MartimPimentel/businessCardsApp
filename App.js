import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigator from './src/components/screens/DrawerSideBar/DrawerNavigator/DrawerNavigator';
export default function App() {
  /*   let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "NunitoSans-Regular": require("./src/assets/fonts/NunitoSans-Regular.ttf"),
    "NunitoSans-Bold": require("./src/assets/fonts/NunitoSans-Bold.ttf"),
    "Nunito-SemiBold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <DrawerNavigator />;
  } */
  return <DrawerNavigator />;
}
