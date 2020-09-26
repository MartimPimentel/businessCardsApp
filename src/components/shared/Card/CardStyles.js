import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default Styles = StyleSheet.create({
  outsideContainer: {
    height: windowHeight <= 600 ? 180 : 220,
    width: '90%',
    alignSelf: 'center',
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
  fullCardView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    paddingLeft: '7%',
    paddingRight: '3%',
    paddingVertical: '3%',
    flexDirection: 'row',
  },
  leftView: {
    height: '100%',
    width: '50%',
    justifyContent: 'space-between',
  },
  rightView: {
    height: '100%',
    width: '50%',
    justifyContent: 'space-between',
  },
  imageView: {
    height: windowHeight <= 600 ? 70 : 90,
    width: windowHeight <= 600 ? 70 : 90,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: '100%',
    borderRadius: 500,
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: '#BFD0F7',
  },
  companyView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  companyText: {
    marginRight: 15,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    fontSize: 12,
  },
  bottomView: {
    height: '50%',
    width: '100%',
    backgroundColor: 'yellow',
  },
  fullInfoView: {},
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },
  infoText: {
    marginLeft: 10,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    fontSize: 12,
  },
  nameText: {
    marginLeft: 10,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  logoView: {
    alignItems: 'flex-end',
    marginRight: '4%',
  },
});
