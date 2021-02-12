import React from 'react';
import {View, Text} from 'react-native';
import Styles from './QRCodeModalStyles';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const QRCodeModal = ({content, setQrcodeVisible}) => {
  return (
    <View style={Styles.modalContainer}>
      <View style={Styles.modalBackground}>
        <QRCode size={200} value={content} />
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
export default QRCodeModal;
