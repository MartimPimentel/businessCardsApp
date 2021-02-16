import {StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButtonContainer: {
    marginTop: '15%',
    borderRadius: 15,
    width: 80,
    height: 40,
  },
  closeButtonBackground: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
  },
});
