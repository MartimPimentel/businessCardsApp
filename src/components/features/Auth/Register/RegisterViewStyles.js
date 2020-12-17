import {StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  signUpText: {
    alignSelf: 'center',
    paddingBottom: '20%',
    fontFamily: 'Nunito-Bold',
    fontSize: 49,
    color: 'white',
  },
  outsideContainer: {
    width: '100%',
    height: '30%',
  },
  formContainer: {
    width: '80%',
    height: '100%',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    marginBottom: '20%',
  },
  inputContainer: {
    height: '33%',
    width: '100%',
    borderColor: '#C9C9C9',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconsContainer: {width: '10%', height: '40%', marginLeft: '5%'},
  textInputStyles: {
    marginLeft: '5%',
    fontSize: 25,
    width: '80%',
  },
  signInButtonContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonStyles: {
    marginLeft: '60%',
    marginBottom: '1.5%',
  },
  changeToLoginContainer: {
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '2%',
  },
  changeToLoginTextStyles: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
  },
});
