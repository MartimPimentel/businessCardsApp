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
    paddingBottom: '5%',
    paddingTop: '3%',
    flexDirection: 'row',
  },
  leftView: {
    height: '100%',
    width: '55%',
  },
  rightView: {
    height: '100%',
    width: '45%',
    justifyContent: 'space-between',
  },
  imageView: {
    height: windowHeight <= 600 ? 70 : 90,
    width: windowHeight <= 600 ? 70 : 90,
    justifyContent: 'center',
  },
  imageProfile: (isVisible) => {
    return {
      alignSelf: 'center',
      height: '100%',
      borderRadius: 500,
      width: '100%',
      backgroundColor: 'transparent',
      borderWidth: 5,
      borderColor: '#BFD0F7',
      display: isVisible ? 'flex' : 'none',
    };
  },
  imageLogo: (isVisible) => {
    return {
      alignSelf: 'center',
      height: '110%',

      width: '30%',
      backgroundColor: 'transparent',

      display: isVisible ? 'flex' : 'none',
    };
  },
  companyView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '20%',
    width: '100%',
  },
  companyNameText: (isVisible) => {
    return {
      fontFamily: 'Nunito-Regular',
      alignSelf: 'center',
      color: 'white',
      fontSize: 12,
      display: isVisible ? 'flex' : 'none',
      marginRight: 15,
      textAlign: 'center',
    };
  },
  companyPositionText: (isVisible) => {
    return {
      fontFamily: 'Nunito-Regular',
      alignSelf: 'center',
      color: 'white',
      fontSize: 11,
      display: isVisible ? 'flex' : 'none',
      marginRight: 15,
      textAlign: 'center',
      alignSelf: 'center',
      top: 3,
      width: '70%',
    };
  },
  bottomView: {
    height: '50%',
    width: '100%',
  },
  fullInfoView: {top: '5%'},

  infoView: (isVisible) => {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '2%',
      display: isVisible ? 'flex' : 'none',
    };
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
