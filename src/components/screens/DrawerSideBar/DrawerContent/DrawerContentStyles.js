import {Dimensions, Platform, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default Styles = StyleSheet.create({
  menusContainer: {
    position: 'absolute',
    top: '45%',
    left: 0,
    height: '30%',
  },
  myCardsStyle: (isSelected) => {
    return {
      flexDirection: 'row',
      width: '116%',
      left: 20,
    };
  },
  personalAreaStyle: (isSelected) => {
    return {
      flexDirection: 'row',
      width: '130%',
      left: 20,
    };
  },
  textStyle: {color: 'white', left: 20, fontSize: 20, width: '60%'},
  seletecTag: (isSelected) => {
    return {
      backgroundColor: isSelected ? 'white' : 'transparent',
      left: 0,
      top: 0,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      width: '5%',
      height: '100%',
      marginRight: 35,
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
    height: windowHeight <= 550 ? 80 : 130,
    borderRadius: 130 / 2,
    width: windowHeight <= 550 ? 80 : 130,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: 'white',
  },
  userImageStyles: {
    height: windowHeight <= 550 ? 70 : 120,
    width: windowHeight <= 550 ? 70 : 120,
    borderRadius: windowHeight <= 550 ? 70 / 2 : 120 / 2,
  },
  userNameStyles: {color: 'white', top: 10, fontSize: 25},
  userEmailStyles: {color: 'white', top: 10, fontSize: 15},
});
