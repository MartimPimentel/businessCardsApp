import React from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Styles from './SettingsFormStyles';

const SettingsForm = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <View style={Styles.outsideContainer}>
      <View style={{marginBottom: 15}}>
        <View>
          <Text style={Styles.titleEntries}>Email</Text>
        </View>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}
      </View>
      <View style={{marginBottom: 15}}>
        <View>
          <Text style={Styles.titleEntries}>Password</Text>
        </View>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="lastName"
          defaultValue=""
        />
      </View>
      <View style={{marginBottom: 15}}>
        <Button title="Delete Account" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default SettingsForm;
