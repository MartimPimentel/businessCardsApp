import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  divider: {
    height: '40%',
    justifyContent: 'flex-end',
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
  card: {height: '40%'},
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
});
