import {StyleSheet} from 'react-native';
import {vw, vh} from 'react-native-viewport-units';
export default Styles = StyleSheet.create({
  signUpText: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 49,
    paddingTop: '20%',
    color: 'white',
  },
  outsideContainer: {
    marginTop: '30%',
    width: '100%',
    height: 140 * (vh / vw),
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
      height: '33.5%',
      width: '100%',
      borderColor: error ? 'red' : '#C9C9C9',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: error ? 3 : 0,
    };
  },
  iconsContainer: {width: '10%', height: '40%', marginLeft: '5%'},
  textInputStyles: {
    marginLeft: '5%',
    fontSize: 25,
    width: '75%',
  },
  signInButtonContainer: {
    top: '33.3%',
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
  errorTextStyles: {fontSize: 20, color: 'orange', fontWeight: '800'},
});
