import {Dimensions, Platform, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  openOverlayButton: {
    borderRightColor: '#DFDFDF',
    borderRightWidth: 0.5,
    height: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'white',
    elevation: 1.5,
  },
  openOverlayText: {
    textAlign: 'center',
    color: '#9B9898',
    width: '65%',
    alignSelf: 'center',
  },
  flatListStyles: {
    backgroundColor: 'white',
    top: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 9999,
    elevation: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
