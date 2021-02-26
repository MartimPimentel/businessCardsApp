import React, {useEffect, useState} from 'react';
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
import {formSchema} from './functions/formsFunctions';
import {yupResolver} from '@hookform/resolvers';

const EmailForm = () => {
  const [isEditable, setIsEditable] = useState(false);

  const onSubmit = (data) => console.log(data);
  const navigation = useNavigation();
  const emailSchema = formSchema();
  const {handleSubmit, errors, control, reset, clearErrors, setValue} = useForm(
    {
      resolver: yupResolver(emailSchema),
      mode: 'onChange',
    },
  );

  useEffect(() => {
    setTimeout(() => {
      setIsEditable(true);
    }, 100);
  }, []);
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
        <Text style={Styles.titleStyles}>Change Email</Text>
        <View style={Styles.outsideContainer}>
          <View style={{marginBottom: 15}}>
            <View>
              <Text style={Styles.titleEntries}>Email</Text>
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  editable={isEditable}
                  style={Styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  keyboardType="email-address"
                />
              )}
              name="email"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.email && (
              <Text style={{color: 'red'}}>{errors.email.message}</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default EmailForm;
