import React from "react";
import { Text, ImageBackground, View } from "react-native";
import Styles from "./HeaderStyles";
import { LeftArrowIcon, SaveIcon, CardsIcon } from "../../../assets/icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HeaderBackground } from "../../../assets/backgrounds";

const HeaderEdit = ({ onClickToSaveData }) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.header}>
      <ImageBackground
        source={HeaderBackground}
        style={Styles.backgroundAndroid}
      >
        <View style={Styles.icons}>
          <TouchableOpacity
            style={Styles.leftIcon}
            onPress={() => navigation.goBack()}
          >
            <View
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
              }}
            >
              <LeftArrowIcon />
            </View>
          </TouchableOpacity>
          <CardsIcon />
          <TouchableOpacity
            style={Styles.rightIcon}
            onPress={onClickToSaveData}
          >
            <SaveIcon style={{ marginBottom: 15 }} />
            <Text
              style={{
                fontSize: 11,
                color: "white",
                fontFamily: "Nunito-SemiBold",
                position: "absolute",
                alignSelf: "center",
                marginTop: 38,
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderEdit;
