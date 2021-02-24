import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Modal from './Modal';
export default function ModalManager() {
  const modalLookup = {Modal};
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <View>{renderedModal}</View>;
}
