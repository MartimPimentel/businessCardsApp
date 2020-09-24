import {Dimensions, Platform, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  textInputView: {
    height: 'auto',
    width: '80%',
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    marginLeft: 15,
    height: windowHeight < 550 ? 40 : 50,
  },
});
