import { StyleSheet } from "react-native";
export default Styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  cardDimensions: {
    height: "100%",
    width: "90%",
    backgroundColor: "lightblue",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  underCardShadow: {
    backgroundColor: "black",
    width: "80%",
    alignSelf: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    opacity: 0.03,
    top: 0,
  },
});
