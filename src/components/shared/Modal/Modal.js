import React from 'react';
import {View, Text} from 'react-native';
import Styles from './ModalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Modal = ({setQrcodeVisible, component}) => {
  return (
    <View style={Styles.modalContainer}>
      <View style={Styles.modalBackground}>
        {component}
        <TouchableOpacity
          title="close"
          style={Styles.closeButtonContainer}
          onPress={() => {
            setQrcodeVisible(false);
          }}>
          <LinearGradient
            style={Styles.closeButtonBackground}
            colors={['#A9E2FD', '#8AB1F2']}>
            <Text style={{textAlign: 'center', color: 'white'}}>Close</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Modal;
