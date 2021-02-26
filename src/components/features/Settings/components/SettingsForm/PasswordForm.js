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

const PasswordForm = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const navigation = useNavigation();
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
                />
              )}
              name="currentPassword"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}
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
                />
              )}
              name="newPassword"
              defaultValue=""
            />
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
                />
              )}
              name="confirmNewPassword"
              defaultValue=""
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordForm;
