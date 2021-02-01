import {Dimensions, Platform, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  outsideContainer: {
    height: '100%',
    alignSelf: 'center',
  },
  titleStyles: {
    fontSize: 20,
    color: '#474D5D',
    fontFamily: 'Nunito-Regular',
  },
  categoryText: {
    color: '#8DB6F3',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
  },
  informationText: {
    marginTop: 10,
    opacity: 0.8,
    color: '#393939',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  noInfoContainer: {
    height: '100%',
    top: '20%',
  },
  noInfoTextStyles: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
});
