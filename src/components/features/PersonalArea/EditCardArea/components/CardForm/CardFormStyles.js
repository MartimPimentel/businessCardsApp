import { Dimensions, Platform, StyleSheet } from "react-native";
export default Styles = StyleSheet.create({
  outsideContainer: { paddingHorizontal: 40, paddingTop: 10 },
  titleEntries: {
    color: "#8DB6F3",
    fontSize: 16,
    fontFamily: "NunitoSans-Bold",
  },
  textInputStyles: {
    height: 40,
    borderColor: "gainsboro",
    borderBottomWidth: 2.5,
    opacity: 0.8,
    color: "#393939",
    fontSize: 18,
    fontFamily: "NunitoSans-Regular",
    paddingBottom: 5,
  },
  connectIconsTextContainer: {
    position: "absolute",
    alignSelf: "center",
    height: "85%",
    paddingLeft: "15%",
    justifyContent: "center",
  },
  connectIconsTextStyles: {
    color: "white",
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
  },
});
