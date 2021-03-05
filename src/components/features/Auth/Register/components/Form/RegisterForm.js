import React, {useRef, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../RegisterViewStyles';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {
  LockAuth,
  UserAuth,
  RegisterBtn,
  EmailIcon,
  ConfirmAuthLock,
} from '../../../../../../assets/icons';
import {vw, vh} from 'react-native-viewport-units';
import {useIsFocused} from '@react-navigation/native';
import {AsyncContext} from '../../../../../../shared/providers/AsyncProvider';

let passwordRef = null;
const registerSchema = yup.object().shape({
  password: yup.string().required('*Required'),
  confirmPassword: yup
    .string()
    .test('isEqual', '*Passwords differ', function (value) {
      const pass =
        passwordRef.current._internalFiberInstanceHandleDEV.memoizedProps.value;

      return value == pass;
    })
    .required('*Required'),
  email: yup.string().email('*Invalid email address').required('*Required'),
});

const RegisterForm = ({onClickToRegister}) => {
  const isFocused = useIsFocused();
  const {error} = useContext(AsyncContext);
  const {handleSubmit, errors, control, reset, setError, formState} = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
  });
  const {isDirty} = formState;
  const onSubmit = (data) => {
    onClickToRegister({email: data.email, userPassword: data.password});
  };
  passwordRef = useRef();
  useEffect(() => {
    reset();
  }, [isFocused]);
  useEffect(() => {
    if (isDirty && error?.error == 'Signup-001')
      setError('email', {type: 'required', message: error.message});
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
                  placeholder="email"
                  keyboardType="email-address"
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
              {borderTopWidth: errors.email ? 0 : 3},
            ]}>
            <View style={Styles.iconsContainer}>
              <LockAuth width="100%" height="100%" preserveAspectRatio="meet" />
            </View>

            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  placeholder="password"
                  ref={passwordRef}
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
          <View
            style={[
              Styles.inputContainer(errors.confirmPassword),
              {
                borderBottomRightRadius: 50,
                borderTopWidth:
                  errors.confirmPassword && errors.password ? 0 : 3,
              },
            ]}>
            <View style={Styles.iconsContainer}>
              <ConfirmAuthLock
                width="100%"
                height="100%"
                preserveAspectRatio="meet"
              />
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  placeholder="confirm password"
                  style={Styles.textInputStyles}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry
                />
              )}
              name="confirmPassword"
              defaultValue=""
            />
          </View>
        </View>
        <View style={Styles.signInButtonContainer}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{width: 50 * (vh / vw), height: 50 * (vh / vw)}}>
            <RegisterBtn
              width="100%"
              height="100%"
              preserveAspectRatio="meet"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.errorContainer}>
        {errors.username && (
          <Text style={Styles.errorTextStyles}>
            username: {errors.username.message}
          </Text>
        )}
        {errors.email && (
          <Text style={Styles.errorTextStyles}>
            email: {errors.email.message}
          </Text>
        )}
        {errors.password && (
          <Text style={Styles.errorTextStyles}>
            password: {errors.password.message}
          </Text>
        )}
        {errors.confirmPassword && (
          <Text style={Styles.errorTextStyles}>
            confirm passwords: {errors.confirmPassword.message}
          </Text>
        )}
      </View>
    </>
  );
};
export default RegisterForm;
