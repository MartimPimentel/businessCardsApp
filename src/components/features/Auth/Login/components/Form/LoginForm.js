import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../LoginViewStyles';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {
  LockAuth,
  ErrorsWarning,
  LogInBtn,
  EmailIcon,
} from '../../../../../../assets/icons';
import {vw, vh} from 'react-native-viewport-units';
import {useIsFocused} from '@react-navigation/native';
import {AsyncContext} from '../../../../../../shared/providers/AsyncProvider';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('* Invalid email address')
    .required('* Email is required'),
  password: yup.string().required('* Password is required'),
});

const LoginForm = ({onClickToLogin, disabled}) => {
  const {error} = useContext(AsyncContext);
  const isFocused = useIsFocused();
  const {handleSubmit, errors, control, reset, setError, formState} = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  });
  const {isDirty} = formState;
  const onSubmit = (data) => {
    onClickToLogin({email: data.email, userPassword: data.password});
  };
  useEffect(() => {
    reset();
  }, [isFocused]);
  useEffect(() => {
    if (isDirty && error) {
      if (error.error == 'Credentials-001') {
        setError('email', {type: 'required', message: error.message});
      } else if (error.error == 'Credentials-002') {
        setError('password', {type: 'required', message: error.message});
      }
    }
  }, [error]);
  return (
    <>
      <View style={Styles.outsideContainer}>
        <View style={Styles.formContainer}>
          <View
            style={[
              Styles.inputContainer(errors.email),
              {borderTopRightRadius: 50},
            ]}>
            <View style={Styles.iconsContainer}>
              <EmailIcon
                width="100%"
                height="100%"
                preserveAspectRatio="meet"
              />
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  editable={disabled}
                  placeholder="email"
                  style={Styles.textInputStyles}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="email"
              defaultValue=""
            />
          </View>
          <View
            style={[
              Styles.inputContainer(errors.password),
              {
                borderBottomRightRadius: 50,
                borderTopWidth: errors.email ? 0 : 3,
              },
            ]}>
            <View style={Styles.iconsContainer}>
              <LockAuth width="100%" height="100%" preserveAspectRatio="meet" />
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  editable={disabled}
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

      {errors.email && (
        <View style={Styles.individualContainer}>
          <View style={Styles.warningContainer}>
            <ErrorsWarning
              width="100%"
              height="100%"
              preserveAspectRatio="meet"
            />
          </View>

          <Text style={Styles.errorTextStyles}>{errors.email.message}</Text>
        </View>
      )}
      {errors.password && (
        <View style={Styles.individualContainer}>
          <View style={Styles.warningContainer}>
            <ErrorsWarning
              width="100%"
              height="100%"
              preserveAspectRatio="meet"
            />
          </View>
          <Text style={Styles.errorTextStyles}>{errors.password.message}</Text>
        </View>
      )}
    </>
  );
};
export default LoginForm;
