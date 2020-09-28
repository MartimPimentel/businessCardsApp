import {Dimensions, Platform, StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  outsideContainer: {paddingHorizontal: 40, paddingTop: 10},
  titleEntries: {
    color: '#8DB6F3',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
  },
  textInputStyles: {
    borderColor: 'gainsboro',
    borderBottomWidth: 2.5,
    opacity: 0.8,
    color: '#393939',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    paddingBottom: 5,
  },
  connectIconsTextContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: '85%',
    paddingLeft: '15%',
    justifyContent: 'center',
  },
  connectIconsTextStyles: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left: -3,
  },
  photoStyles: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 100 / 2,
  },
  chooseImageButton: {
    height: 40,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  deleteImageButton: {
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: '20%',
  },
  separatorPhotos: {
    borderColor: 'gainsboro',
    borderBottomWidth: 2.5,
    marginBottom: 15,
  },
});
