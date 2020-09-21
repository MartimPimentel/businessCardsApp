import React from "react";
import { Text, View } from "react-native";
import Styles from "./CardStyles";
import { CardBackground } from "../../../assets/backgrounds";
const Card = ({ data }) => {
  return (
    <View style={{ height: "90%" }}>
      <CardBackground height="100%" width="100%" />
    </View>
  );
};
export default Card;
