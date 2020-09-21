import React from "react";
import { View, TextInput } from "react-native";
import { SearchBarIcon } from "../../../assets/icons";
import Styles from "./SearchBarStyles";

const SearchBar = () => {
  const placeholder = "Search Cards";
  return (
    <View style={Styles.textInputView}>
      <TextInput placeholder={placeholder} style={Styles.textInput}></TextInput>
      <SearchBarIcon style={{ marginRight: 10 }} />
    </View>
  );
};

export default SearchBar;
