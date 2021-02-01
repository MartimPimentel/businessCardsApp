import {Platform, StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  header: {
    height: Platform.OS == 'android' ? '16%' : '15%',
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
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    marginRight: 30,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  safeAreaView: {
    flex: 1,
    backgroundColor: '#A9E2FD',
    borderBottomLeftRadius: 39,
    borderBottomRightRadius: 39,
  },
});
