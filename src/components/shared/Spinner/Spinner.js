import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems:
          'center' /* 
        width: '100%',
        height: '100%', */,
        flex: 1,
      }}>
      <ActivityIndicator size={100} color="#8AB1F2" />
    </View>
  );
};
export default Spinner;
