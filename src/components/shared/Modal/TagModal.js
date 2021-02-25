import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './ModalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {closeModal} from './modalReducer';
import {useDispatch} from 'react-redux';

const TagModal = ({
  headerText,
  actionButtonText,
  cancelButtonTest,
  onAction = () => {},
  onClose = () => {},
  headerStyles,
}) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  return (
    <View style={[Styles.modalContainer, headerStyles]}>
      <Text style={Styles.headerStyles}>{headerText}</Text>
      <TextInput
        style={[Styles.textInputTagModalStyles, Styles.bodyStyles]}
        onChangeText={(text) => setUserId(text)}
      />
      <View style={Styles.buttonsContainer}>
        <TouchableOpacity
          delayPressIn={0}
          title="close"
          style={Styles.closeButtonContainer}
          onPress={() => {
            dispatch(closeModal());
            onClose();
          }}>
          <LinearGradient
            style={Styles.closeButtonBackground}
            colors={['#C8C8C8', '#707070']}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              {cancelButtonTest}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        {actionButtonText && (
          <>
            <View style={{width: '5%'}} />
            <TouchableOpacity
              title="action"
              style={Styles.closeButtonContainer}
              onPress={() => {
                dispatch(closeModal());
                onAction(userId);
              }}>
              <LinearGradient
                style={Styles.closeButtonBackground}
                colors={['#A9E2FD', '#8AB1F2']}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  {actionButtonText}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
export default TagModal;
