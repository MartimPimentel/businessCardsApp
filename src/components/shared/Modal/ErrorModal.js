import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './ModalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {closeModal} from './modalReducer';
import {useDispatch} from 'react-redux';

const ErrorModal = ({
  bodyText,
  actionButtonText,
  cancelButtonTest,
  onAction,
  onClose = () => {},
  headerStyles,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={[Styles.modalContainer, headerStyles]}>
      <Text style={Styles.headerStyles}>Error</Text>
      <Text style={Styles.bodyStyles}>{bodyText}</Text>
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
                setVisibilty(false);
                onAction();
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
export default ErrorModal;
