import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default Styles = StyleSheet.create({
  outsideContainer: {
    height: windowHeight <= 600 ? 180 : 220,
    width: windowWidth * 0.9,
    left: '5%',
  },
  backgroundStyles: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  leftDrawingsStyle: {
    position: 'absolute',
    width: '90%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightDrawingStyles: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    width: '70%',
    height: '60%',
  },
  textContainerStyles: {
    paddingTop: windowHeight <= 600 ? 180 * 0.2 : 220 * 0.2,
    alignItems: 'center',
  },
  textStyles: {
    fontFamily: 'Nunito-Regular',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonsContainer: {
    top: '5%',
    flexDirection: 'row',
    width: '50%',
    left: '40%',
  },
  buttonsStyles: {
    borderRadius: 25,
    width: 70,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
  },
  textButtonStyles: {
    textAlignVertical: 'center',
    height: '100%',
    color: 'white',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
});
