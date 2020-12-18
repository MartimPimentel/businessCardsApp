import React from 'react';
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
const RegisterView = (props) => {
  const navigation = useNavigation();
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
    navigation.push('Auth');
  };
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
              props.navigation.navigate('Login');
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
