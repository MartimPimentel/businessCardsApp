import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../LoginViewStyles';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {LockAuth, UserAuth, LogInBtn} from '../../../../../../assets/icons';
import {vw, vh} from 'react-native-viewport-units';

const loginSchema = yup.object().shape({
  username: yup.string().required('*Required'),
  password: yup.string().required('*Required'),
});

const LoginForm = ({onClickToLogin}) => {
  const {handleSubmit, errors, control} = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  });
  const onSubmit = (data) => {
    onClickToLogin(data);
  };
  return (
    <>
      <View style={Styles.outsideContainer}>
        <View style={Styles.formContainer}>
          <View
            style={[
              Styles.inputContainer(errors.username),
              {borderTopRightRadius: 50},
            ]}>
            <View style={Styles.iconsContainer}>
              <UserAuth width="100%" height="100%" preserveAspectRatio="meet" />
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  placeholder="username"
                  style={Styles.textInputStyles}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="username"
              defaultValue=""
            />
          </View>
          <View
            style={[
              Styles.inputContainer(errors.password),
              {
                borderBottomRightRadius: 50,
                borderTopWidth: errors.password && errors.username ? 0 : 3,
              },
            ]}>
            <View style={Styles.iconsContainer}>
              <LockAuth width="100%" height="100%" preserveAspectRatio="meet" />
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  placeholder="password"
                  style={Styles.textInputStyles}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry
                />
              )}
              name="password"
              defaultValue=""
            />
          </View>
        </View>
        <View style={Styles.loginButtonContainer}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{width: 50 * (vh / vw), height: 50 * (vh / vw)}}>
            <LogInBtn width="100%" height="100%" preserveAspectRatio="meet" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.errorContainer}>
        {errors.username && (
          <Text style={Styles.errorTextStyles}>
            username: {errors.username.message}
          </Text>
        )}
        {errors.password && (
          <Text style={Styles.errorTextStyles}>
            password: {errors.password.message}
          </Text>
        )}
      </View>
    </>
  );
};
export default LoginForm;
