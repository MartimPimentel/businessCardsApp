import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  divider: {
    height: '40%',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  textBox: {
    alignSelf: 'center',
  },
  outsideContainer: {
    height: windowHeight < 600 ? '60%' : '40%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {height: '40%', paddingTop: 30},
  footerBackground: {
    backgroundColor: 'white',
    height: '50%',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  buttonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    paddingHorizontal: '10%',
    justifyContent: 'space-evenly',
  },
  titleTexts: {
    textAlign: 'center',
    fontSize: 20,
    color: '#393939',
    fontFamily: 'Nunito-Regular',
    padding: 10,
  },
  modalContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
