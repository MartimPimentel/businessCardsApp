import React from "react";
import { View, Text } from "react-native";
import Swipper from "./components/Swipper/Swipper";
import Styles from "./MyCardAreaStyles";
import HeaderSearch from "../../shared/Header/HeaderSearch";
const MyCardsArea = () => {
  return (
    <>
      <HeaderSearch />
      <View style={Styles.outsideContainer}>
        <Text style={Styles.titleStyles}>My Cards</Text>
        <Swipper />
      </View>
    </>
  );
};
export default MyCardsArea;
