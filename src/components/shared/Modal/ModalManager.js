import React from 'react';
import {useSelector} from 'react-redux';
import ErrorModal from './ErrorModal';
import QRCodeModal from './QRCodeModal';

export default function ModalManager() {
  const modalLookup = {ErrorModal, QRCodeModal};
  const currentModal = useSelector((state) => state.modals);
  let renderedModal = null;
  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return renderedModal;
}
