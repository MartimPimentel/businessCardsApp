import React from 'react';
import {Text, View, TextInput, Keyboard} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Styles from './FormStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import HeaderEdit from '../../../PersonalArea/EditCardArea/components/Header/HeaderEdit';
import {passwordFormSchema} from './functions/formsFunctions';
import {yupResolver} from '@hookform/resolvers';

const PasswordForm = () => {
  const passwordSchema = passwordFormSchema();
  const {handleSubmit, errors, control} = useForm({
    resolver: yupResolver(passwordSchema),
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });
  const onSubmit = (data) => {
    //TO DO
    //api call
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <HeaderEdit onClickToSaveData={handleSubmit(onSubmit)} />

      <Text style={Styles.titleStyles}>Change Password</Text>
      <View style={Styles.outsideContainer}>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.titleEntries}>Current Password</Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={Styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
            name="currentPassword"
          />
          {errors.currentPassword && (
            <Text style={{color: 'red'}}>{errors.currentPassword.message}</Text>
          )}
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={Styles.titleEntries}>New Password</Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={Styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
            name="newPassword"
          />
          {errors.newPassword && (
            <Text style={{color: 'red'}}>{errors.newPassword.message}</Text>
          )}
        </View>
        <View>
          <Text style={Styles.titleEntries}>Confirm New Password</Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={Styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
            name="confirmNewPassword"
          />
          {errors.confirmNewPassword && (
            <Text style={{color: 'red'}}>
              {errors.confirmNewPassword.message}
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PasswordForm;
