import {StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    top: 10,
  },
  deleteButtonContainer: {
    width: '50%',
    alignSelf: 'center',
  },

  photoStyles: (radius) => {
    return {
      width: 90,
      height: 90,
      resizeMode: 'contain',
      borderRadius: radius ? 300 : 0,
    };
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
