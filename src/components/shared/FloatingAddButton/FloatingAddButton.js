import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import Styles from './FloatingAddButtonStyles';
import {LinkIcon, QRCodeIcon, PlusIcon, CloseIcon} from '../../../assets/icons';
const FloatingAddButton = ({handleQRCode, handleLink}) => {
  const [actionsOpened, setActionsOpened] = useState(false);
  return (
    <View style={Styles.wrapperContainer}>
      {actionsOpened && (
        <>
          <TouchableOpacity
            style={[Styles.choiceButtonSize, {elevation: 5}]}
            onPress={() => {
              handleLink();
              setActionsOpened(false);
            }}>
            <LinearGradient
              style={[
                Styles.choiceButtonSize,
                {alignItems: 'center', justifyContent: 'center'},
              ]}
              colors={['#A9E2FD', '#8AB1F2']}>
              <View style={{width: 30, height: 30}}>
                <LinkIcon
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.choiceButtonSize, {elevation: 5, marginTop: 10}]}
            onPress={() => {
              handleQRCode();
              setActionsOpened(false);
            }}>
            <LinearGradient
              style={[
                Styles.choiceButtonSize,
                {alignItems: 'center', justifyContent: 'center'},
              ]}
              colors={['#A9E2FD', '#8AB1F2']}>
              <QRCodeIcon
                width="100%"
                height="100%"
                preserveAspectRatio="meet"
              />
            </LinearGradient>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        style={[Styles.actionButtonSize, {elevation: 5, marginTop: 10}]}
        onPress={() => setActionsOpened(!actionsOpened)}>
        <LinearGradient
          style={[
            Styles.actionButtonSize,
            {alignItems: 'center', justifyContent: 'center'},
          ]}
          colors={['#A9E2FD', '#8AB1F2']}>
          {actionsOpened ? (
            <View style={{width: 55, height: 55, bottom: 2}}>
              <CloseIcon
                width="100%"
                height="100%"
                preserveAspectRatio="meet"
              />
            </View>
          ) : (
            <PlusIcon width="100%" height="100%" preserveAspectRatio="meet" />
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingAddButton;
