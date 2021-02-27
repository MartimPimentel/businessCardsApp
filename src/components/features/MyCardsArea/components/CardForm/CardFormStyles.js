import {StyleSheet} from 'react-native';
export default Styles = StyleSheet.create({
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
  iconsContainer: {
    height: '47%',
    width: '85%',
  },
  iconsTouchableContainer: {
    height: 50,
    width: '86%',
  },
  headerContainer: {
    borderColor: 'gainsboro',
    borderBottomWidth: 2.5,
  },
  linksContainer: {
    height: 280,
    alignItems: 'center',
  },
  fieldContainer: (fieldExists) => {
    return {
      marginBottom: 15,
      display: fieldExists ? 'flex' : 'none',
      width: '100%',
    };
  },
});
