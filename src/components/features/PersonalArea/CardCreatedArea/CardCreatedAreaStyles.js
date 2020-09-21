import { Platform, StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito-Regular",
    fontSize: 17,
    alignSelf: "center",
  },
  textBox: {
    alignSelf: "center",
    marginTop: 30,
  },
  card: {
    marginTop: Platform.OS == "android" ? -260 : -200,
  },
});
