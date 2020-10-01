import {StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
  },
  photoStyles: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 300,
  },
  chooseImageButton: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  deleteImageButton: {
    backgroundColor: 'red',
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
