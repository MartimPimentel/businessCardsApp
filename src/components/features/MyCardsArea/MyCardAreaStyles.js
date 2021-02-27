import {StyleSheet} from 'react-native';
import {vw, vh} from 'react-native-viewport-units';

export default Styles = StyleSheet.create({
  outsideContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
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
    height: '80%',
    justifyContent: 'center',
  },
  noInfoTextStyles: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
  closeScannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  deleteButtonStyles: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#D5D5D5',
    marginRight: '5%',
    height: 7 * vh,
    width: 40 * vw,
  },
  shareButtonStyles: {
    height: 7 * vh,
    width: 40 * vw,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
});
