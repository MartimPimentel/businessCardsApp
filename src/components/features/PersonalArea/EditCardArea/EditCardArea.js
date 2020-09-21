import React, { useState } from "react";
import { View, Text, Keyboard } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import HeaderEdit from "../../../shared/Header/HeaderEdit";
import CardForm from "./components/CardForm/CardForm";
import Styles from "./EditCardAreaStyles";
const EditCardArea = () => {
  const [pressedSave, setPressedSave] = useState(undefined);
  const saveCardData = (data) => {
    console.log("Saved data:", data);
    //Redirect to personal Area page here!
  };
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{ height: "100%", width: "100%" }}
      >
        <HeaderEdit
          onClickToSaveData={() => {
            setPressedSave(pressedSave != undefined ? !pressedSave : true);
          }}
        />
        <View style={Styles.outsideContainer}>
          <Text style={Styles.titleStyles}>Edit My Card</Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 30 }}
          >
            <CardForm
              onClickToSave={pressedSave}
              redirectSubmittedData={saveCardData}
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
export default EditCardArea;
