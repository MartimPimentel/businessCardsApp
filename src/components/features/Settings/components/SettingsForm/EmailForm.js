import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Keyboard} from 'react-native';
import Styles from './FormStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import HeaderEdit from '../../../PersonalArea/EditCardArea/components/Header/HeaderEdit';
import {emailFormSchema} from './functions/formsFunctions';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {useNavigation} from '@react-navigation/native';
import {useEmailChange} from '../../../../../shared/api/changeEmail';

const EmailForm = () => {
  const navigation = useNavigation();
  const changeEmail = useEmailChange();
  const [isEditable, setIsEditable] = useState(false);
  const emailSchema = emailFormSchema();
  const {handleSubmit, errors, control} = useForm({
    resolver: yupResolver(emailSchema),
    mode: 'onSubmit',
    defaultValues: {email: ''},
  });

  const onSubmit = (data) => {
    changeEmail(data);
  };

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
        onClickToSaveData={handleSubmit(onSubmit)}
        onPressBack={() => navigation.navigate('Settings')}
      />
      <Text style={Styles.titleStyles}>Change Email</Text>
      <View style={Styles.outsideContainer}>
        <Text style={Styles.titleEntries}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({onChange, onBlur, value}) => (
            <TextInput
              editable={isEditable}
              style={Styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
        />
        {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EmailForm;
