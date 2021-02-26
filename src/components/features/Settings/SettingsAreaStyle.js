import {Dimensions, Platform, StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
  titleStyles: {
    textAlign: 'center',
    fontSize: 20,
    color: '#393939',
    fontFamily: 'Nunito-Regular',
  },
  titleEntries: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
    marginTop: 15,
    paddingBottom: 10,
  },
  optionsContainer: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  optionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outsideContainer: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
  },
  delete: {
    marginTop: 10,
    marginLeft: '10%',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
