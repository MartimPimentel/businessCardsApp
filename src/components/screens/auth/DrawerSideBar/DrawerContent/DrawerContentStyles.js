import {Dimensions, Platform, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  menusContainer: {
    position: 'absolute',
    top: '45%',
    left: 0,
    height: '30%',
  },
  myCardsStyle: {
    flexDirection: 'row',
    width: '100%',
    left: 20,
  },
  personalAreaStyle: {
    flexDirection: 'row',
    width: '100%',
    left: 20,
  },
  textStyle: {
    color: 'white',
    left: 10,
    fontSize: 20,
    width: '60%',
    width: '70%',
  },
  seletecTag: (isSelected) => {
    return {
      backgroundColor: isSelected ? 'white' : 'transparent',
      left: 0,
      top: 0,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      width: '13%',
      height: '100%',
      marginRight: 10,
    };
  },
  personalAreaSelected: (isSelected) => {
    return {
      backgroundColor: 'white',
      left: -45,
      top: -13,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      width: '5%',
      height: '90%',
      display: isSelected ? 'flex' : 'none',
    };
  },
  separatorStyle: {
    height: '10%',
    width: '60%',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    left: 75,
    marginBottom: Platform.OS == 'android' ? 20 : 25,
  },
  backgroundContainer: {
    width: '98%',
    height: '100%',
  },
  userProfileContainer: {
    position: 'absolute',
    top: '8.5%',
    alignItems: 'center',
    width: '105%',
  },
  userImageContainer: {
    height: windowHeight <= 600 ? 100 : 130,
    borderRadius: 130 / 2,
    width: windowHeight <= 600 ? 100 : 130,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: 'white',
  },
  userImageStyles: {
    height: windowHeight <= 600 ? 90 : 120,
    width: windowHeight <= 600 ? 90 : 120,
    borderRadius: windowHeight <= 600 ? 90 / 2 : 120 / 2,
  },
  userNameStyles: {
    color: 'white',
    top: 10,
    fontSize: 25,
    width: '70%',
    textAlign: 'center',
  },
  userEmailStyles: {color: 'white', top: 10, fontSize: 15},
  logOutContainer: {
    position: 'absolute',
    bottom: '10%',
    width: '50%',
    left: '23%',
  },
  logOutButton: {
    flexDirection: 'row',
  },
  logOutSeparator: {
    height: 10,
    width: '120%',
    left: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  globalContainer: {
    left: -25,
    width: '110%',
    borderTopRightRadius: 29,
    borderBottomRightRadius: 29,
  },
  linearGradientStyles: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 39,
    borderTopRightRadius: 39,
  },
  topBackground: {
    backgroundColor: 'white',
    opacity: 0.25,
    height: '20%',
    width: '100%',
    borderTopRightRadius: 39,
  },
});
