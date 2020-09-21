import React from "react";
import { ImageBackground, View } from "react-native";
import Styles from "./HeaderStyles";
import { EditIcon, MenuIcon, CardsIcon } from "../../../assets/icons";
import { HeaderBackground } from "../../../assets/backgrounds";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.header}>
      <ImageBackground source={HeaderBackground} style={Styles.background}>
        <View style={Styles.icons}>
          <TouchableOpacity
            style={Styles.leftIcon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <MenuIcon />
          </TouchableOpacity>
          <CardsIcon />
          <View style={Styles.rightIcon}>
            <EditIcon />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
