import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import Styles from './FloatingAddButtonStyles';
const FloatingAddButton = ({onPress}) => {
  return (
    <View style={Styles.wrapperContainer}>
      <TouchableOpacity
        style={[Styles.circleSize, {elevation: 5}]}
        onPress={onPress}>
        <LinearGradient
          style={[
            Styles.circleSize,
            {alignItems: 'center', justifyContent: 'center'},
          ]}
          colors={['#A9E2FD', '#8AB1F2']}>
          <Text style={Styles.plusStyles}>+</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingAddButton;
