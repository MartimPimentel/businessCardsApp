import {StyleSheet} from 'react-native';
import {vw, vh} from 'react-native-viewport-units';
export default Styles = StyleSheet.create({
  signUpText: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 49,
    paddingTop: '35%',
    color: 'white',
  },
  outsideContainer: {
    marginTop: '22%',
    width: '100%',
    height: 80 * (vh / vw),
  },
  formContainer: {
    width: '80%',
    height: '100%',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    marginBottom: '20%',
  },
  inputContainer: (error) => {
    return {
      height: '50%',
      width: '100%',
      borderColor: error ? 'red' : '#C9C9C9',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: error ? 2 : 0,
    };
  },
  iconsContainer: {width: '10%', height: '40%', marginLeft: '5%'},
  textInputStyles: {
    marginLeft: '5%',
    fontSize: 25,
    width: '75%',
  },
  loginButtonContainer: {
    top: '21%',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    left: '67%',
  },
  changeToLoginContainer: {
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '2%',
    marginBottom: '5%',
  },
  changeToLoginTextStyles: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
  },
  errorContainer: {
    top: '1%',
    paddingLeft: '5%',
    width: '80%',
  },
  errorTextStyles: {
    fontSize: 19,
    color: 'orange',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  warningContainer: {
    height: '60%',
    width: '10%',
    alignSelf: 'center',
    right: '10%',
  },
  individualContainer: {
    flexDirection: 'row',
    height: 30,
    width: '80%',
    left: '5%',
  },
});
