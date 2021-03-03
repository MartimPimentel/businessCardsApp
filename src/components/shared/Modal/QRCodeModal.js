import React from 'react';
import {View, Text} from 'react-native';
import Styles from './ModalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {closeModal} from './modalReducer';

const QRCodeModal = ({body, cancelButtonTest, headerStyles}) => {
  const dispatch = useDispatch();
  return (
    <View style={[Styles.modalContainer, headerStyles]}>
      <View style={{marginTop: '10%'}}>{body}</View>

      <View style={{flexDirection: 'row', marginTop: '5%'}}>
        <TouchableOpacity
          title="close"
          style={Styles.closeButtonContainer}
          onPress={() => {
            dispatch(closeModal());
          }}>
          <LinearGradient
            style={Styles.closeButtonBackground}
            colors={['#C8C8C8', '#707070']}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              {cancelButtonTest}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default QRCodeModal;
