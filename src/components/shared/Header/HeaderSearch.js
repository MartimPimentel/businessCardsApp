import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "./HeaderStyles";
import {
  MenuIcon,
  CardsIcon,
  SearchIcon,
  LeftArrowIcon,
} from "../../../assets/icons";
import { HeaderBackground } from "../../../assets/backgrounds";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderSearch = () => {
  const navigation = useNavigation();
  const [searchBarActivated, setSearchBarActivated] = useState(false);

  if (!searchBarActivated) {
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
              <TouchableOpacity
                onPress={() => {
                  setSearchBarActivated(true);
                }}
              >
                <SearchIcon />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={Styles.header}>
        <ImageBackground source={HeaderBackground} style={Styles.background}>
          <View style={Styles.searchBarView}>
            <TouchableOpacity
              onPress={() => {
                setSearchBarActivated(false);
              }}
            >
              <LeftArrowIcon style={{ marginLeft: 20 }} />
            </TouchableOpacity>
            <SearchBar />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={Styles.header}>
      <ImageBackground source={HeaderBackground} style={Styles.background}>
        if (!searchBarActivated)
        {
          <View style={Styles.icons}>
            <TouchableOpacity
              style={Styles.leftIcon}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <MenuIcon />
            </TouchableOpacity>
            <CardsIcon />
            <View style={Styles.rightIcon}>
              <TouchableOpacity
                onPress={() => {
                  searchBarActivated = true;
                }}
              >
                <SearchIcon />
              </TouchableOpacity>
            </View>
          </View>
        }
        else
        {
          <View style={Styles.searchBarView}>
            <TouchableOpacity
              onPress={() => {
                searchBarActivated = false;
              }}
            >
              <LeftArrowIcon style={{ marginLeft: 20 }} />
            </TouchableOpacity>
            <SearchBar />
          </View>
        }
      </ImageBackground>
    </View>
  );
};

export default HeaderSearch;
