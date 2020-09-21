import React, { useEffect } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import Styles from "./CardFormStyles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  ConnectFacebookIcon,
  ConnectInstagramIcon,
  ConnectLinkedInIcon,
} from "../../../../../../assets/icons";
const projectFormSchema = yup.object().shape({
  name: yup.string().required("*Required"),
  email: yup.string().required("*Required"),
  phoneNumber: yup.string().required("*Required"),
  address: yup.string().required("*Required"),
  companyName: yup.string().required("*Required"),
});
const windowWidth = Dimensions.get("window").width;

const CardForm = ({ onClickToSave, redirectSubmittedData }) => {
  const { handleSubmit, trigger, watch, errors, control } = useForm({
    resolver: yupResolver(projectFormSchema),
  });
  const onSubmit = (data) => {
    redirectSubmittedData(data);
  };
  useEffect(() => {
    return handleSubmit(onSubmit);
  }, [onClickToSave]);
  return (
    <View style={Styles.outsideContainer}>
      <View style={{ marginBottom: 15 }}>
        <Text style={Styles.titleEntries}>NAME</Text>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={{ color: "red" }}>This is required.</Text>}
      </View>

      <View style={{ marginBottom: 15 }}>
        <Text style={Styles.titleEntries}>EMAIL</Text>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={Styles.titleEntries}>PHONE NUMBER</Text>
        <Controller
          control={control}
          name="phoneNumber"
          defaultValue=""
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.phoneNumber && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={Styles.titleEntries}>ADDRESS</Text>
        <Controller
          control={control}
          name="address"
          defaultValue=""
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.address && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={Styles.titleEntries}>COMPANY NAME</Text>
        <Controller
          control={control}
          name="companyName"
          defaultValue=""
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.companyName && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>
      <TouchableOpacity>
        <ConnectFacebookIcon
          viewBox={windowWidth <= 350 ? "10 -7 250 95" : ""}
          style={{ left: windowWidth <= 350 ? -50 : -10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ConnectInstagramIcon
          viewBox={windowWidth <= 350 ? "10 -7 250 95" : ""}
          style={{ left: windowWidth <= 350 ? -50 : -10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ConnectLinkedInIcon
          viewBox={windowWidth <= 350 ? "10 -7 250 95" : ""}
          style={{ left: windowWidth <= 350 ? -50 : -10 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default CardForm;
