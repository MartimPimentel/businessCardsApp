import React, {useEffect, useState} from 'react';
import {Text, Keyboard} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './RegisterViewStyles';
import {useNavigation} from '@react-navigation/native';
import RegisterForm from './components/Form/RegisterForm';
import {useIsFocused} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {createUser} from '../../../../shared/api/createUser';
import ErrorModal from '../../../shared/Modal/ErrorModal';
import {useNetInfo} from '@react-native-community/netinfo';

const RegisterView = (props) => {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [error, setError] = useState(null);

  const handleRegister = (data) => {
    //console.log(data);
    if (netInfo.isConnected) {
      createUser(data)
        .then((res) => {
          console.log(res.data);
          setError(null);
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Login'}],
            }),
          );
        })
        .catch((error) => {
          const errors = JSON.parse(error.request.response);

          setError(errors);

          console.log(error.request.response.message);
        });
    } else {
      setError({
        message: 'You are currently offline. Go online to be able to login.',
      });
    }
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
          <RegisterForm
            onClickToRegister={handleRegister}
            errorMessage={
              error && error.error == 'Signup-001' ? error.message : null
            }
          />
          <ErrorModal
            isVisible={error && error.error != 'Signup-001'}
            cancelButtonTest="Ok"
            onClose={() => setError(null)}
            header={<Text style={{fontSize: 25}}>Error</Text>}
            body={
              error && (
                <>
                  <Text>{error.message}</Text>
                  {error.error && <Text>Please try again.</Text>}
                </>
              )
            }
          />
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
