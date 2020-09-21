import React from "react";
import { View, Text } from "react-native";
import Styles from "./CardCreatedAreaStyles";
import Header from "../../../shared/Header/Header";
import Card from "../../../shared/Card/Card";
import { CircleIcon } from "../../../../assets/icons";

const CardCreatedArea = () => {
  return (
    <>
      <Header />
      <View style={Styles.textBox}>
        <Text style={Styles.text}>Personal Area</Text>
      </View>
      <View style={Styles.card}>
        <Card />
      </View>
      <View style={Styles.card}>
        <Card />
      </View>
    </>
  );
};
export default CardCreatedArea;
