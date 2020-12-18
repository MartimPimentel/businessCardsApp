import React, {useEffect} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './RegisterViewStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import RegisterForm from './components/Form/RegisterForm';
import {useIsFocused} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
const RegisterView = (props) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@AUTH_KEY', value);
    } catch (e) {
      // saving error
    }
  };
  const handleRegister = (data) => {
    console.log(data);
    storeData('chave_de_entrada');

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Auth'}],
      }),
    );
  };
  useEffect(() => {}, [isFocused]);
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <LinearGradient
        style={{width: '100%', height: '100%', justifyContent: 'center'}}
        colors={['#80C8FC', '#5350DB']}>
        <Text style={Styles.signUpText}>Sign up</Text>
        <ScrollView>
          <RegisterForm onClickToRegister={handleRegister} />
          <TouchableOpacity
            style={Styles.changeToLoginContainer}
            onPress={() => {
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'Login'}],
                }),
              );
            }}>
            <Text style={[Styles.changeToLoginTextStyles, {color: 'white'}]}>
              Have an account already ?
            </Text>
            <Text style={[Styles.changeToLoginTextStyles, {marginLeft: '2%'}]}>
              Log in
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default RegisterView;
