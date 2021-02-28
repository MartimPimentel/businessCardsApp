import React from 'react';
import {Text, View, TextInput, Button, Alert, Keyboard} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Styles from './FormStyles';
import {
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import HeaderEdit from '../../../PersonalArea/EditCardArea/components/Header/HeaderEdit';
import {useNavigation} from '@react-navigation/native';
import {passwordFormSchema} from './functions/formsFunctions';
import {yupResolver} from '@hookform/resolvers';

const PasswordForm = () => {
  const onSubmit = (data) => console.log(data);
  const navigation = useNavigation();

  const passwordSchema = passwordFormSchema();
  const {handleSubmit, errors, control, reset, clearErrors, setValue} = useForm(
    {
      resolver: yupResolver(passwordSchema),
      mode: 'onChange',
    },
  );
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <HeaderEdit
        onClickToSaveData={() => {
          setPressedSave(pressedSave != undefined ? !pressedSave : true);
        }}
        onPressBack={() => navigation.navigate('Settings')}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        <Text style={Styles.titleStyles}>Change Password</Text>
        <View style={Styles.outsideContainer}>
          <View style={{marginBottom: 15}}>
            <View>
              <Text style={Styles.titleEntries}>Current Password</Text>
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  style={Styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry
                />
              )}
              name="currentPassword"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.currentPassword && (
              <Text style={{color: 'red'}}>
                {errors.currentPassword.message}
              </Text>
            )}
          </View>
          <View style={{marginBottom: 15}}>
            <View>
              <Text style={Styles.titleEntries}>New Password</Text>
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  style={Styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry
                />
              )}
              name="newPassword"
              defaultValue=""
            />
            {errors.newPassword && (
              <Text style={{color: 'red'}}>{errors.newPassword.message}</Text>
            )}
          </View>
          <View style={{marginBottom: 15}}>
            <View>
              <Text style={Styles.titleEntries}>Confirm New Password</Text>
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  style={Styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry
                />
              )}
              name="confirmNewPassword"
              defaultValue=""
            />
            {errors.confirmNewPassword && (
              <Text style={{color: 'red'}}>
                {errors.confirmNewPassword.message}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordForm;
