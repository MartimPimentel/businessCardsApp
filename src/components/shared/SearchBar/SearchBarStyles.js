import {Dimensions, Platform, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  textInputView: {
    height: '50%',
    width: '80%',
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textInput: {
    width: '80%',
    marginLeft: 5,
    height: windowHeight < 600 ? 40 : 50,
  },
});
