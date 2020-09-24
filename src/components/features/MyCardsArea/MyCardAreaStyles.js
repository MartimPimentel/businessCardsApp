import {Dimensions, Platform, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  outsideContainer: {
    height: windowHeight < 550 ? '50%' : '40%',
    alignSelf: 'center',
    marginTop: 40,
  },
  titleStyles: {
    textAlign: 'center',
    fontSize: 20,
    color: '#393939',
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
});
