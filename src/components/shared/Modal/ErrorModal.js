import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Styles from './ModalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ErrorModal = ({
  isVisible,
  body,
  header,
  onClose,
  actionButtonText,
  cancelButtonTest,
  onAction,
  headerStyles,
}) => {
  const [visibility, setVisibilty] = useState(isVisible);
  useEffect(() => {
    setVisibilty(isVisible);
  }, [isVisible]);
  return (
    visibility && (
      <View style={[Styles.modalContainer, headerStyles]}>
        <View style={{marginTop: '5%'}}>{header}</View>
        <View style={{marginTop: '10%'}}>{body}</View>

        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableOpacity
            title="close"
            style={Styles.closeButtonContainer}
            onPress={() => {
              setVisibilty(false);
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
    )
  );
};
export default ErrorModal;
