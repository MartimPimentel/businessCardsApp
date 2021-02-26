import {StyleSheet} from 'react-native';
import {vw, vh} from 'react-native-viewport-units';

export default Styles = StyleSheet.create({
  wrapperContainer: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    alignItems: 'center',
  },
  choiceButtonSize: {
    width: 25 * (vh / vw),
    height: 25 * (vh / vw),
    borderRadius: (25 * (vh / vw)) / 2,
  },
  actionButtonSize: {
    width: 32 * (vh / vw),
    height: 32 * (vh / vw),
    borderRadius: (32 * (vh / vw)) / 2,
  },
});
