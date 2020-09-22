import {Platform, StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  header: {
    height: '15%',
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
  },
  iconsView: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  icons: {
    top: 30,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcon: {
    marginLeft: 30,
  },
  rightIcon: {
    marginRight: 30,
  },
  searchBarView: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '80%',
    marginTop: 35,
  },
});
