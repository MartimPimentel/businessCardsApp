import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default Styles = StyleSheet.create({
  outsideContainer: {
    height: windowHeight <= 550 ? '80%' : 220,
    width: windowWidth <= 350 ? '90%' : 350,
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
    flexDirection: 'column',
  },
  topView: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageView: {
    height: windowHeight <= 550 ? 70 : 90,
    width: windowHeight <= 550 ? 70 : 90,
    justifyContent: 'center',
    left: '25%',
    top: '2%',
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
    marginTop: '2%',
    marginRight: '5%',
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
    flexDirection: 'row',
  },
  fullInfoView: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
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
    height: '100%',
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
