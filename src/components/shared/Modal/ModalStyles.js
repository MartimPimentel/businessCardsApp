import {StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '35%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 5,
  },
  closeButtonContainer: {
    borderRadius: 15,
    width: 80,
    height: 40,
    zIndex: 1,
  },
  closeButtonBackground: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
  },
  headerStyles: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    marginTop: '10%',
  },
  bodyStyles: {
    textAlignVertical: 'center',
    marginTop: '5%',
    width: '80%',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '10%',
  },
});
