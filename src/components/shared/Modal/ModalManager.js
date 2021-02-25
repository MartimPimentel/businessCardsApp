import React from 'react';
import {useSelector} from 'react-redux';
import ErrorModal from './ErrorModal';
import QRCodeModal from './QRCodeModal';
import TagModal from './TagModal';

export default function ModalManager() {
  const modalLookup = {ErrorModal, QRCodeModal, TagModal};
  const currentModal = useSelector((state) => state.modals);
  let renderedModal = null;
  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return renderedModal;
}
