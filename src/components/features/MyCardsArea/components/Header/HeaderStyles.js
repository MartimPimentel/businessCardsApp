import {Platform, StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  header: {
    height: Platform.OS == 'android' ? '13%' : '15%',
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    flexDirection: 'column',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
  },
  icons: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 10,
  },
  leftIcon: {
    marginLeft: 30,
  },
  rightIcon: {
    marginRight: 30,
  },
  rightIconSave: {
    marginRight: 25,
  },
  searchBarView: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    marginTop: 35,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#A9E2FD',
    borderBottomLeftRadius: 39,
    borderBottomRightRadius: 39,
  },
  backButtonContainer:{marginLeft: 10,height:35,width:40,alignItems:"center",justifyContent:"center"}
});
