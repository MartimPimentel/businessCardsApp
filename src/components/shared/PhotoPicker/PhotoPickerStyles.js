import {StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left: '-35%',
  },
  photoStyles: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 100 / 2,
  },
  chooseImageButton: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
